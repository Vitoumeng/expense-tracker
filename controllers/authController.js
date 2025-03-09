const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (id) => {
	return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1h"});
}

// Register user
exports.registerUser = async (req, res) => {
	// After create UserSchema
	const { fullName, email, password, profileImageUrl } = req.body;
	
	// Validate: Check for missing fields
	if(!fullName || !email || !password) {
		return res.status(400).json({ message: "All fields are required" });
	}
	
	try {
		// check if email already exists
		const existingUser = await User.findOne({ email });
		
		if(existingUser) {
			return res.status(400).json({ message: "Email already in use"});
		}
		
		// create the user 
		const user = await User.create({
			fullName, email, password, profileImageUrl,
		});
		
		res.status(201).json({ 
			id: user._id,
			user,
			token: generateToken(user._id),
		});
	} catch (e) {
		res
			.status(500)
			.json({ message: "Error register user", error: e.message });
	}
};


// Login user
// exports.loginUser = asyn (req, res) => {}

// get User Info
// exports.getUserInfo= asyn (req, res) => {}