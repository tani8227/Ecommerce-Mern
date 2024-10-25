import mongoose from 'mongoose'

export const getFilter = async (req, res) => {


    try {
        const { categoryName, company_Name, company_status, minRange, maxRange } = req.query;
        if (company_status === 'true')
             {

            console.log("hello there", company_Name, company_status, minRange, maxRange)

            const DynamicModel = mongoose.model(categoryName);
            const data = await DynamicModel.find(
                {
                    "$and": [
                        { companyName: company_Name },
                        { "price": { $gte: minRange, $lte: maxRange } },
                    ]
                });

            if (data) {
                // console.log("yes", data);

                return res.status(200).json(
                    {
                        message: "got the filter data",
                        data: data,
                    })
            } else {

                return res.status(200).json(
                    {
                        message: "have not got the filter data",
                        data: [],
                    })
            }
        } else {

            return res.status(200).json(
                {
                    message: "have not got the filter data",
                    data: [],
                })
        }


    } catch (error) {
        return res.status(422).json({
            message: "error in finding the search items",
            error: error
        })
    }
}



export const getFilterByParamSearch = async (req, res) => {

    try {
        const { categoryName, company_Name, minRange, maxRange } = req.query;
        // console.log(categoryName, company_Name, minRange, maxRange)
        const DynamicModel = mongoose.model(categoryName);
        

                const data = await DynamicModel.find({
                    "$and":
                    [
                        { companyName: company_Name },
                        { "price": { $gte: minRange, $lte: maxRange } },
                    ]
                })
                if (data) {
                    
                    // console.log("yes", data);
                    
                    return res.status(200).json(
                        {
                            message: "got the filter data by param search",
                            data: data,
                        })
                    } else {
                        
                        return res.status(401).json(
                            {
                                message: "have not got the filter data",
                                data: [],
                            })
                        }
                 
    } catch (error) {
        return res.status(422).json({
            message: "error in finding the search items",
            error: error
        })

    }

}




export const getAllProducts = async (req, res) => {

    try {

         
          const DynamicModel= mongoose.model(req.query.modalName)
          const minRange = Number(req.query.minRange) 
         const maxRange = Number(req.query.maxRange) 
         const range= Math.abs(maxRange-minRange);
         const item = await DynamicModel.find({
            price:{$lte:range}
        });

        if (item) {
            

            return res.status(200).json(
                {
                    message: "got the item successfully",
                    data: item
                })
        }

        else {
            return res.status(401).json(
                {
                    message: "item not found",
                    data:[]
                })
        }
    } catch (error) {
        return res.status(401).json(
            {
                message: "error in getting the item",
                error: error,

            })
    }

}