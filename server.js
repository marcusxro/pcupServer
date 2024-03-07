const express = require('express');
const cors = require('cors');
const app = express();
const { ObjectId } = require('mongodb');
const InfoCol = require('./InfoCol')
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('connected');
});

//send info to database
app.post('/reportCreate', async (req, res) => {
    const {
      userName,
      controlNum,
      reqDate,
      unit,
      TShooting,
      LAN,
      preventive,
      Train,
      otherCon,
      equip,
      explainBrief,
      brand,
      inven,
      accPerson,
      model,
      sNumber,
      access,
      others,
      recDate,
      actionTaken,
      remarks,
      status,
      statDate,
      inCom,
      checkedAndRep,
      noted,
      endU,
      conformed,
      returnedDate
    } = req.body;
  
    try {
      const reportsCreate = new InfoCol({
        userName: userName,
        controlNum: controlNum,
        reqDate: reqDate,
        unit: unit,
        TShooting: TShooting ? true : false,
        LAN: LAN ? true : false,
        preventive: preventive ? true : false,
        Train: Train ? true : false,
        equip: equip ? true : false,
        otherCon: otherCon,
        explainBrief: explainBrief,
        brand: brand,
        inven: inven,
        accPerson: accPerson,
        model: model,
        sNumber: sNumber,
        access: access,
        others: others,
        recDate: recDate,
        actionTaken: actionTaken,
        remarks: remarks,
        status: status,
        statDate: statDate,
        inCom: inCom,
        checkedAndRep: checkedAndRep,
        noted: noted,
        endU: endU,
        conformed: conformed,
        returnedDate: returnedDate
      });
  
      await reportsCreate.save();
      res.status(201).json({ message: 'Report created successfully' });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ error: 'Error creating report' });
    }
  });
  

  app.get('/getInfo', async (req, res) => {
    InfoCol.find()
    .then((data) => {
      res.json(data)
    }).catch((err) => {
      console.log(err)
    } )
  })

  app.delete("/item/:id", async (req, res) => {
    const itemId = req.params.id; //delete item from client
    const data = await InfoCol;
    const result = await data.deleteOne({ _id: new ObjectId(itemId) }); //finds the particular id to be deleted
    if (!itemId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send('Invalid ObjectId format'); //if invalid. this is  required
    } if (result.deletedCount === 1) { //success
      res.send("Document deleted successfully");
    } else {
      res.status(404).send("Document not found");
    }
  });


  //edit collection
  app.put('/update/:user', async (req, res) => {
    const commId = req.params.user;
    const {
      userName,
      controlNum,
      reqDate,
      unit,
      TShooting,
      LAN,
      preventive,
      Train,
      otherCon,
      equip,
      explainBrief,
      brand,
      inven,
      accPerson,
      model,
      sNumber,
      access,
      others,
      recDate,
      actionTaken,
      remarks,
      status,
      statDate,
      inCom,
      checkedAndRep,
      noted,
      endU,
      conformed,
      returnedDate
    } = req.body;
  
    try {
      const result = await InfoCol.findByIdAndUpdate(commId, {
        $set: {
          userName: userName,
        controlNum: controlNum,
        reqDate: reqDate,
        unit: unit,
        TShooting: TShooting ? true : false,
        LAN: LAN ? true : false,
        preventive: preventive ? true : false,
        Train: Train ? true : false,
        equip: equip ? true : false,
        otherCon: otherCon,
        explainBrief: explainBrief,
        brand: brand,
        inven: inven,
        accPerson: accPerson,
        model: model,
        sNumber: sNumber,
        access: access,
        others: others,
        recDate: recDate,
        actionTaken: actionTaken,
        remarks: remarks,
        status: status,
        statDate: statDate,
        inCom: inCom,
        checkedAndRep: checkedAndRep,
        noted: noted,
        endU: endU,
        conformed: conformed,
        returnedDate: returnedDate
        },
      });
      if (!result) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


app.listen(8080, () => {
    console.log('server started');
  });
  
  
  