db.createUser(
    { 
        user: "root", 
        pwd:  "password", 
        roles:[
            {
                role: "readwrite",
                db:   "Connections"
            }
        ]
    }
);