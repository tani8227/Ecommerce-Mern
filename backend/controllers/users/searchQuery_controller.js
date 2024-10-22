import Mobile from '../../modal/seller/mobiles.js';
import Fridge from '../../modal/seller/appliances/fridge.js'
import LedTV from '../../modal/seller/appliances/ledTV.js'
import  Cooler from '../../modal/seller/appliances/cooler.js'
import WashingMachine from '../../modal/seller/appliances/washingMachine.js'
import AC from '../../modal/seller/appliances/ac.js'
import Laptop from '../../modal/seller/electronics/laptop.js'
import Printer from '../../modal/seller/electronics/printer.js'
import Camera from '../../modal/seller/electronics/camera.js'
import Shirt from '../../modal/seller/fashion//shirt.js'
import Tshirt from '../../modal/seller/fashion/tshirt.js'
import Jeans from '../../modal/seller/fashion/jeans.js'
import Shoe from '../../modal/seller/fashion/shoe.js'
import TrackPant from '../../modal/seller/fashion/trackPant.js'
import WindCheater from '../../modal/seller/fashion/windCheater.js'
import Flour from '../../modal/seller/grocery/flour.js'
import Detergent from '../../modal/seller/grocery/detergents.js'
import Shampoo from '../../modal/seller/grocery/shampoo.js'
import OralCare from '../../modal/seller/grocery/oralCare.js'
import CleaningEssentials from '../../modal/seller/grocery/cleaningEssentials.js'




export const searchQuery= async(req, res)=>
{
    // console.log(req.query);
   try {
         
    const {query}= req.query;

    if(!query)
        {
            return res.status(400).json(
                { 
                    message: 'No search query provided'
                }
            );
        }

        const lowerCaseQuery = query.toLowerCase().trim();
       
        if (lowerCaseQuery === 'mobile') {
            const allMobiles = await Mobile.find({});
            
            return res.status(200).json(
                {
                    data:allMobiles,
                    message:'Found All Mobile ',
                     modalName:'Mobile'
                }
            );
        }
        else if(lowerCaseQuery==='fridge')
            {
                
                const allFridge = await Fridge.find({});
                
                return res.status(200).json(
                    {
                        data:allFridge,
                        message:'Found All Fridge ',
                        modalName:'Fridge'
                    }
                );
            }
           
        else if(lowerCaseQuery==='ledtv')
            {
                
                const allLedTV = await LedTV.find({});
           
                return res.status(200).json(
                    {
                        data:allLedTV,
                        message:'Found All LedTV ',
                         modalName:'LedTV'
                    }
                );
            }
        else if(lowerCaseQuery==='cooler')
            {
                
                const allCooler = await Cooler.find({});
               
                return res.status(200).json(
                    {
                        data:allCooler,
                        message:'Found All Cooler ',
                         modalName:'Cooler'
                    }
                );
            }
        else if(lowerCaseQuery==='washingmachine')
            {
                
                const allWashingMachine = await WashingMachine.find({});
               
                return res.status(200).json(
                    {
                        data:allWashingMachine,
                        message:'Found All WashingMachine ',
                         modalName:'WashingMachine'
                    }
                );
            }
        else if(lowerCaseQuery==='ac')
            {
                
                const allAC = await AC.find({});
                
                return res.status(200).json(
                    {
                        data:allAC,
                        message:'Found All AC ',
                         modalName:'AC'
                    }
                );
            }
        else if(lowerCaseQuery==='waterpurifier')
            {
                
                const allWaterPurifier = await WaterPurifier.find({});
              
                return res.status(200).json(
                    {
                        data:allWaterPurifier,
                        message:'Found All WaterPurifier ',
                         modalName:'WaterPurifier'
                    }
                );
            }
        else if(lowerCaseQuery==='shirt')
            {
                
                const allShirt = await Shirt.find({});
                return res.status(200).json(
                    {
                        data:allShirt,
                        message:'Found All Shirt ',
                         modalName:'Shirt'
                    }
                );
            }
        else if(lowerCaseQuery==='tshirt')
            {

                const allTshirt = await Tshirt.find({});
                console.log(allTshirt)
                return res.status(200).json(
                    {
                        data:allTshirt,
                        message:'Found All Tshirts ',
                         modalName:'Tshirt'
                    }
                );
            }
        else if(lowerCaseQuery==='shoe')
            {
                
                const allShoe = await Shoe.find({});
                return res.status(200).json(
                    {
                        data:allShoe,
                        message:'Found All Shoe ',
                         modalName:'Shoe'
                    }
                );
            }
        else if(lowerCaseQuery==='jeans')
            {
                
                const allJeans = await Jeans.find({});
                return res.status(200).json(
                    {
                        data:allJeans,
                        message:'Found All Jeans ',
                         modalName:'Jeans'
                    }
                );
            }
        else if(lowerCaseQuery==='trackpant')
            {
                
                const allTrackPant = await TrackPant.find({});
                return res.status(200).json(
                    {
                        data:allTrackPant,
                        message:'Found All TrackPant ',
                         modalName:'TrackPant'
                    }
                );
            }
        else if(lowerCaseQuery==='windcheater')
            {
                
                const allWindCheater = await WindCheater.find({});
                return res.status(200).json(
                    {
                        data:allWindCheater,
                        message:'Found All WindCheater ',
                         modalName:'WindCheater'
                    }
                );
            }
        else if(lowerCaseQuery==='flour')
            {
                
                const allFlour = await Flour.find({});
                return res.status(200).json(
                    {
                        data:allFlour,
                        message:'Found All Flour ',
                         modalName:'Flour'
                    }
                );
            }
        else if(lowerCaseQuery==='detergent')
            {
                
                const allDetergent = await Detergent.find({});
                return res.status(200).json(
                    {
                        data:allDetergent,
                        message:'Found All Detergent ',
                         modalName:'Detergent'
                    }
                );
            }
        else if(lowerCaseQuery==='oralcare')
            {
                
                const allOralCare = await OralCare.find({});
                return res.status(200).json(
                    {
                        data:allOralCare,
                        message:'Found All OralCare ',
                         modalName:'OralCare'
                    }
                );
            }
        else if(lowerCaseQuery==='cleaningessentials')
            {
                
                const allCleaningEssentials = await CleaningEssentials.find({});
                return res.status(200).json(
                    {
                        data:allCleaningEssentials,
                        message:'Found All CleaningEssentials ',
                         modalName:'CleaningEssentials'
                    }
                );
            }
        else if(lowerCaseQuery==='shampoo')
            {
                
                const allShampoo = await Shampoo.find({});
                return res.status(200).json(
                    {
                        data:allShampoo,
                        message:'Found All Shampoo ',
                         modalName:'Shampoo'
                    }
                );
            }
        else if(lowerCaseQuery==='pulses')
            {
                
                const allPulses = await Pulses.find({});
                return res.status(200).json(
                    {
                        data:allPulses,
                        message:'Found All Pulses ',
                         modalName:'Pulses'
                    }
                );
            }
            else if(lowerCaseQuery==='laptop')
                {
                    
                    const allLaptops = await Laptop.find({});
                   
                    return res.status(200).json(
                        {
                            data:allLaptops,
                            message:'Found All Laptop ',
                             modalName:'Laptop'
                        }
                    );
                }
            else if(lowerCaseQuery==='printer')
                {
                    
                    const allPrinter = await Printer.find({});
                   
                    return res.status(200).json(
                        {
                            data:allPrinter,
                            message:'Found All Printer ',
                             modalName:'Printer'
                        }
                    );
                }
            else if(lowerCaseQuery==='camera')
                {
                    
                    const allCamera = await Camera.find({});
                   
                    return res.status(200).json(
                        {
                            data:allCamera,
                            message:'Found All Camera ',
                             modalName:'Camera'
                        }
                    );
                }
           
       

        const queryParts = query.split(' ').map(part => part.trim());
        const filteredQueryParts = queryParts.filter(part => part !== 'tshirt');

        const searchConditions = filteredQueryParts.map(part => ({
            $or: [
              { brandName: { $regex: part, $options: 'i' } },     
              { productName: { $regex: part, $options: 'i' } },   
              { detergentType: { $regex: part, $options: 'i' } }, 
              { size: { $regex: part, $options: 'i' } },          
            ]
          }));
       const tshirtResults= await Tshirt.find({
        $and: searchConditions
      })

      if (tshirtResults.length>0) {
        return res.status(200).json(
            {
                 message: `Got All data:"${query}"`,
                 data:tshirtResults
             });
      }
        
   } catch (error) {
    console.error('Error during detergent search:', error);
    res.status(500).json({ message: 'Server error' });
   }

}