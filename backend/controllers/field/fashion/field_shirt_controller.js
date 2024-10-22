import mongoose from "mongoose";

export const getField = async (req, res) => {

  const obj = JSON.parse(req.query.obj);
  // console.log(obj)
 
    const dynamicModel = new mongoose.model(obj.ProductCategory);


    const data = await dynamicModel.find({
      
        companyName:obj.companyName,
        capacity:obj.capacity,
        fit:obj.fit,
        collarType:obj.collarType,
        fabric:obj.fabric,
        pattern:obj.pattern,
        sleeve:obj.sleeve,
       

    }).select(`${'size'} _id`);

    // console.log(",,,,", data);

    const result = data.reduce((acc, item) => {
      if (!acc[item['size']]) {

        acc[item['size']] = item._id;
      }
      return acc;
    }, {});


    const capacities = Object.entries(result)
      .map(([key, value]) =>
      (
        {
          ['size']: key,
          id: value
        }));


    // console.log(capacities);

    return res.status(200).json(
      {
        data: capacities,
        message: "got the capacities"
      })

  
}

