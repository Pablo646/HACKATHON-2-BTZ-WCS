const BaseModel = require('./BaseModel');

class PhoneModel extends BaseModel {
  constructor() {
    super('phones');
  }

  create(phoneData) {
    console.log(phoneData);
    return this.db.query(
      'INSERT INTO phones (brand, model, phone_year, storage, memory_ram, is_blocked, screen_size, phone_status, antutu_score, estimation_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        phoneData.brand,
        phoneData.model,
        phoneData.phoneYear,
        phoneData.storage,
        phoneData.memoryRam,
        phoneData.isBlocked,
        phoneData.screenSize,
        phoneData.phoneStatus,
        phoneData.antutuScore,
        phoneData.estimationPrice,
      ]
    );
  }
}

module.exports = PhoneModel;
