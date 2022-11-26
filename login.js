const login = async(req, res, next) => {
    const{email,password}= req.body;
    try {
        const user = await db.query(`SELECT * FROM unhan_modul_17 where email=$1;`,[email])
        //check if user is exist
        if(user.rowCount>0){
            // 9. komparasi antara password yang diinput oleh pengguna dan password yang ada didatabase
            const validPass = await bcrypt.compare(password,user.rows[0].password)
            //check if password is match
            if (validPass) {
                // 10. Generate token menggunakan jwt sign
                let jwtSecretKey = process.env.SECRET;
                let data = {
                    id: user.rows[0].id,
                    username: user.rows[0].username,
                    email:user.rows[0].email,
                    password:user.rows[0].password
                }
                const token = jwt.sign(data, jwtSecretKey);
                
                //11. kembalikan nilai id, email, dan username
                 res.cookie("JWT", token, {httpOnly: true,sameSite: "strict"}).status(200).json({
                    id: user.rows[0].id,
                    username: user.rows[0].username,
                    email:user.rows[0].email,
                    token:token
                    });
            } else {
                return res.status(400).send('wrong pass!')   
            }
        }else{
            return res.status(400).json({
                error: "User is not registered, Sign Up first",
            })
        }
    } catch (error) {
        return res.send('login failed')
        
    }
}