const mongoose = require('mongoose');

const atlasUri = 'mongodb+srv://itunit:ITunit@cluster0.q9ejcln.mongodb.net/pcup';

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB Atlas (inventory)");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB Atlas:", e);
  });

const mySchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  controlNum: {
    type: String,
  },
  reqDate: {
    type: String,
  },
  unit: {
  },
  TShooting: {
    type: Boolean,
  },
  LAN: {
    type: Boolean,
  },
  preventive: {
    type: Boolean,
  },
  Train: {
    type: Boolean,
  },
  equip: {
    type: Boolean,
  },
  otherCon: {
    type: String,
  },
  explainBrief: {
    type: String,
  },
  brand: {
    type: String,
  },
  inven: {
    type: String,
  },
  accPerson: {
    type: String,
  },
  model: {
    type: String,
  },
  sNumber: {
    type: String,
  },
  access: {
    type: String,
  },
  others: {
    type: String,
  },
  recDate: {
    type: String,
  },
  actionTaken: {
    type: String,
  },
  remarks: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  statDate: {
    type: String,
  },
  inCom: {
    type: String,
  },
  checkedAndRep: {
    type: String,
  }, remarks: {
    type: String,
  },
  noted: {
    type: String,
  },
  endU: {
    type: String,
  },
  conformed: {
    type: String,
  },
  returnedDate: {
    type: String,
  }
});

const Menu = mongoose.model('info', mySchema);

module.exports = Menu;
