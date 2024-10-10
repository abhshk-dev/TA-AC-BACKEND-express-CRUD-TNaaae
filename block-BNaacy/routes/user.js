const express = require("express");
const router = express.Router();
const User = require("../models/User");
// list all users
router.get("/", (req, res, next) => {
  // handle Action
  User.find({})
    .then((data) => res.render("userList", { users: data }))
    .catch((err) => next(err));
});

router.get("/new", (req, res) => {
  // render the create form
  res.render("formUser.ejs");
});

router.post("/", (req, res) => {
  // capture form data
  User.create(req.body)
    .then((data) => res.redirect("/users/success"))
    .catch((err) => res.redirect("/users/new"));
});

router.get("/success", (req, res) => {
  res.render("success.ejs");
});

router.get("/:id", (req, res, next) => {
  // single user detail
  let id = req.params.id;
  User.findById(id)
    .then((user) => res.render("singleUser.ejs", { user: user }))
    .catch((err) => next(err));
});

const editUserHandler = async (req,res,next)=>{
    try{
        const id=req.params.id;
        const user=await User.findById(id);
        res.render("editForm.ejs", { user: user })
    }catch(err){
        next(err);
    }
}

router.get("/:id/edit",editUserHandler)

const updateUserHandler= async (req,res,next) =>{
    try{
        let id=req.params.id;
        await User.findByIdAndUpdate(id,req.body,{new:true});
        res.redirect('/users');
    }catch(err){
        next(err)
    }
}

router.post("/:id", updateUserHandler);


const deleteUserHandler=async (req,res,next)=>{
    try{
        let id=req.params.id;
        await User.findByIdAndDelete(id);
        res.redirect('/users')
    }catch(err){
        next(err)
    }
}

router.get("/:id/delete", deleteUserHandler);

module.exports = router;
