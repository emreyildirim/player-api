const express = require("express");
const router = express.Router();

const Player= require("../../models/Player");

router.get ("/", (req,res) => {
    const promise = Player.find({});
    promise
     .then(players => 
        res.json ({ succes:true, count: players.lenght,players})
     )
     .catch(err => res.json ({ succes:false, message:"Kayıt yok",err}));

});

router.put("/:id",(req,res) => {
    Player.findByIdAndUpdate(
        {
            _id:req.params.id
        },
        req.body, {new:true}
    )
     .then(player => 
        res.json({success: true, message: "Profil Güncellendi", player })
     )
     .catch(() =>
     res.json({ success: false, message: "Profil Güncellenemedi" })
   );
});

router.post("/", (req,res) =>{
    const newPlayer= new Player({
 
        surname: req.body.surname,
        name: req.body.name,
        picture: req.body.picture,
        team: req.body.team,
        teamlogo: req.body.teamlogo,
        position: req.body.position,
        nationality: req.body.nationality,
        flag: req.body.flag,
        value: req.body.value,
        matches: req.body.matches,
        goals: req.body.goals,
        asists: req.body.asists
    });
    newPlayer
    .save()
    .then(player =>
        res.json({ success: true, message: "Yeni Oyuncu Eklendi!", player })
      )
      .catch(err =>
        res.json({ success: false, message: "Yeni Oyuncu Eklenemedi!!! ", err })
      );
    });
     router.delete("/:id", (req, res) => {
        Player.findById(req.params.id)
        .then(player =>
            player
            .remove()
            .then(() => res.json({ success: true, message: "Oyuncu Silindi!" }))
        )
        .catch(err =>
            res.json({ success: false, message: "Oyuncu Silinemedi!!!", err })
        );
    });
    module.exports = router;
    