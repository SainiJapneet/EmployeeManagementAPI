import express, { response } from "express";
import Employee from "../model/employeeModel.mjs"

const route = express.Router();

//Add employee
route.post("/addEmployee", async (request, response) => {
    const emp = new Employee({
        id: request.body.id,
        name: request.body.name,
        age: request.body.age,
        designation: request.body.designation,
        salary: request.body.salary,
        email: request.body.email
    })
    try{
        const savedEmp = await emp.save();
        response.status(200).json(savedEmp);
        console.log("Employee Added : " + savedEmp);
    }catch(error){
        response.status(500).json({message : error.message})
    }
})

//Get employee
route.get("/getEmployee", async (request, response) =>{
    try{
        const emp = await Employee.find();
        response.json(emp);
        console.log(emp);
    }catch(error){
        response.status(500).json({message : error.message});
    }
})

//Get employee by ID
route.get("/getEmployee/:id", async (request, response) =>{
    try{
        const id = request.params.id;
        const emp = await Employee.findById(id);
        response.json(emp);
        console.log(emp);
    }catch(error){
        response.status(500).json({message : error.message});
    }
})

//Update employee by ID
route.patch("/updateEmployee/:id", async (request, response) => {
    try{
        const id = request.params.id;
        const updatedEmp = request.body;
        const options = {new : true};
        const result = await Employee.findByIdAndUpdate(id, updatedEmp, options);
        response.send(result);
        console.log(result + " Updated Successfully")
    }catch(error){
        response.status(500).json({message : error.message});
    }
})

//Delete employee by ID
route.delete("/deleteEmployee/:id", async (request, response) => {
    try{
        const id = request.params.id;
        const empDelete = await Employee.findByIdAndRemove(id);
        response.send(empDelete);
        console.log(empDelete + " Deleted successfully");
    }catch(error){
        response.status(500).json({message : error.message});
    }
})

export default route;