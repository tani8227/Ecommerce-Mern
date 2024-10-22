import mongoose from "mongoose";

export const getField = async (req, res) => {

  const obj = JSON.parse(req.query.obj);
  console.log(obj)
  if (obj && obj.categoryName !== undefined && obj.companyName !== undefined && obj.wifi !== undefined && obj.starRating !== undefined && obj.technology !== undefined && obj.maxSpinSpeed !== undefined && obj.functionType !== undefined && obj.inBuiltHeater !== undefined) {

    const dynamicModel = new mongoose.model(obj.categoryName);

   

    const data = await dynamicModel.find({
     
      companyName: obj.companyName,
      capacity: obj.capacity,
      wifi: obj.wifi,
      starRating: obj.starRating,
      technology: obj.technology,
      maxSpinSpeed: obj.maxSpinSpeed,
      functionType: obj.functionType,
      inBuiltHeater: obj.inBuiltHeater,

    }).select(`${'capacity'} _id`);

    console.log(",,,,", data);

    const result = data.reduce((acc, item) => {
      if (!acc[item['capacity']]) {

        acc[item['capacity']] = item._id;
      }
      return acc;
    }, {});


    const capacities = Object.entries(result)
      .map(([key, value]) =>
      (
        {
          ['capacity']: key,
          id: value
        }));


    console.log(capacities);

    return res.status(200).json(
      {
        data: capacities,
        message: "got the capacities"
      })

  }
}

