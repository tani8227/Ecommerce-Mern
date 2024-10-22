import mongoose from "mongoose";

export const getField = async (req, res) => {

  const obj = JSON.parse(req.query.obj);
  console.log(obj)
  if (obj &&  obj.wirelessSupport !== undefined&&obj.wirelessSupport!=='') {

    const dynamicModel = new mongoose.model(obj.categoryName);

   

    const data = await dynamicModel.find({
        companyName: obj.companyName,
        printingMethod: obj.printingMethod,
        type: obj.type,
        refillType: obj.refillType,
        wirelessSupport: obj.wirelessSupport,
        usbSupport: obj.usbSupport,
        voiceAssistantCompatibility: obj.voiceAssistantCompatibility,
        salesBox: obj.salesBox,

    }).select(`${'wirelessSupport'} _id`);

    console.log(",,,,", data);

    const result = data.reduce((acc, item) => {
      if (!acc[item['wirelessSupport']]) {

        acc[item['wirelessSupport']] = item._id;
      }
      return acc;
    }, {});


    const capacities = Object.entries(result)
      .map(([key, value]) =>
      (
        {
          ['wirelessSupport']: key,
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

