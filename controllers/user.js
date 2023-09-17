export const getAllUser = async (req, res) => {
    const users = await User.find({});
    res.json(users);
    res.send('hahaha');
}
export const checkNetworking = (req, res) => {
    res.send('its working !!!')
}