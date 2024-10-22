import mongoose from "mongoose";

export const getField = async (req, res) => {

  const obj = JSON.parse(req.query.obj);
  console.log(obj)
  if (obj && obj.categoryName !== undefined && obj.companyName !== undefined && obj.series !== undefined && obj.displaySize !==undefined) {

    const dynamicModel = new mongoose.model(obj.categoryName);


    const data = await dynamicModel.find({
      companyName: obj.companyName,
      series: obj.series,
     

    }).select(`${'displaySize'} _id`);

    console.log(",,,,", data);

    const result = data.reduce((acc, item) => {
      if (!acc[item['displaySize']]) {

        acc[item['displaySize']] = item._id;
      }
      return acc;
    }, {});


    const capacities = Object.entries(result)
      .map(([key, value]) =>
      (
        {
          ['displaySize']: key,
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

