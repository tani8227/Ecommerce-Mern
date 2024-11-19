import mongoose from "mongoose";

export const getField = async (req, res) => {

  const obj = JSON.parse(req.query.obj);
  console.log(obj)
  if (obj && obj.categoryName !== undefined && obj.defrostingType !== undefined && obj.type !== undefined && obj.starRating !==undefined&&obj.compressorType !==undefined&&obj.refrigeratorType !==undefined&&obj.launchYear!==undefined) {

    const dynamicModel = new mongoose.model(obj.categoryName);


    const data = await dynamicModel.find({
     
      companyName: obj.companyName,
      defrostingType: obj.defrostingType,
      type: obj.type,
      starRating: obj.starRating,
      compressorType: obj.compressorType,
      refrigeratorType: obj.refrigeratorType,
      launchYear: obj.launchYear,
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

