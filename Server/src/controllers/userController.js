import userService from "../services/userService"
const handleCreateNewUser = (req, res) => {
    userService.creatNewUser(req.body);
    return res.send("ok");
};
const getAllUsers = (req, res) => {
    const data = userService.getUserList();
    return res.send(data);
}
module.exports = {
    handleCreateNewUser,
    getAllUsers
};
