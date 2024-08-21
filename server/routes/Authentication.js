const express = require("express");
const users = require("../model/users");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, contactnumber, password, confirmpassword } = req.body;

    // Check if email already exists
    const userByEmail = await users.findOne({ email });
    if (userByEmail) {
      return res.status(402).json({ message: "Email already exists" });
    }

    // Check if contact number already exists
    const userByContactNumber = await users.findOne({ contactnumber });
    if (userByContactNumber) {
      return res.status(402).json({ message: "Contact number already exists" });
    }

    // Check if passwords match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Create new user object with hashed password
    const newUser = {
      employeetype: req.body.employeetype,
      employeedomain: req.body.employeedomain,
      name: req.body.name,
      email: req.body.email,
      contactnumber: req.body.contactnumber,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
    };



    // Create user in the database
    const createdUser = await users.create(newUser);

    return res
      .status(200)
      .json({ message: "User created successfully", createdUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }







});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });

    if (!user) {
      return res.status(402).json({ message: "user not found" });
    }

    if (password !== user.password) {
      return res.status(402).json({ message: "password not match" });
    }

    const EmployeeType = user.employeetype;
    if (EmployeeType === "javascript") {
      let payload = {
        email,
      };

      jwt.sign(payload, "jwtpassword", { expiresIn: "5m" }, (err, token) => {
        if (err) {
          return err;
        } else {
          return res
            .status(200)
            .json({ message: "javascript page login successfully", token, EmployeeType});
        }
      });
    } else if (EmployeeType === "react") {
      let payload = {
        email,
      };
      jwt.sign(payload, "jwtpassowrd", { expiresIn: "5m" }, (err, token) => {
        if (err) {
          return err;
        } else {
          return res
            .status(200)
            .json({ message: "react page login successfully", token ,EmployeeType});
        }
      });
    } else {
      let payload = {
        email,
      };
      jwt.sign(payload, "jwtpassword", { expiresIn: "5m" }, (err, token) => {
        if (err) {
          return err;
        } else {
          return res
            .status(200)
            .json({ message: "node page login successfully", token,EmployeeType });
        }
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});





router.post("/login", async (req, res) => {
try {
const { email, password } = req.body;
const user = await users.findOne({ email });

if (!user) {
  return res.status(402).json({ message: "user not found" });
}

if (password !== user.password) {
  return res.status(402).json({ message: "password not match" });
}

const EmployeeDomain = user.employeedomain;
if (EmployeeDomain === "frontend developer") {
  let payload = {
    email,
  };

  jwt.sign(payload, "jwtpassword", { expiresIn: "5m" }, (err, token) => {
    if (err) {
      return err;
    } else {
      return res
        .status(200)
        .json({ message: "frontend develope page login successfully", token, EmployeeDomain});
    }
  });
} else if (EmployeeDomain === "backend developer") {
  let payload = {
    email,
  };
  jwt.sign(payload, "jwtpassowrd", { expiresIn: "5m" }, (err, token) => {
    if (err) {
      return err;
    } else {
      return res
        .status(200)
        .json({ message: "backend developer page login successfully", token ,EmployeeDomain});
    }
  });
} else {
  let payload = {
    email,
  };
  jwt.sign(payload, "jwtpassword", { expiresIn: "5m" }, (err, token) => {
    if (err) {
      return err;
    } else {
      return res
        .status(200)
        .json({ message: "full stack developer page login successfully", token,EmployeeDomain });
    }
  });
}
} catch (err) {
return res.status(500).json({ message: err.message });
}
});

module.exports = router;
