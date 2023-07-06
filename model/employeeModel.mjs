import mongoose, { model } from "mongoose";

const employeeSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: [true, "Employee ID must be unique"],
        required: [true,"Employee ID is a required field"]
    },
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    designation:{
        type: String,
    },
    salary:{
        type: Number,
    },
    email:{
        type: String,
        unique: [true,"Email must be unique"]
    }
})

export default mongoose.models.employees || mongoose.model("employees",employeeSchema)