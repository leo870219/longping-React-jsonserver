import React from "react";

class DataPicker extends React.Component {
  componentDidMount() {
    let current = new Date();
    const data = document.getElementById("takedate");
    if(current.getDate()< 10){
      data.min =
      current.getFullYear() +
      "-0" +
      (current.getMonth() + 1) +
      "-0" +
      current.getDate();
    }else{
      data.min =
      current.getFullYear() +
      "-0" +
      (current.getMonth() + 1) +
      "-" +
      current.getDate();
    }
    switch (current.getMonth() + 1) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        switch (true) {
          case current.getMonth() + 1 === 8 && current.getDate() + 9 > 31:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 22);
            break;
          case current.getMonth() + 1 === 10 && current.getDate() + 9 > 31:
            data.max =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 22);
            data.min = data.min =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              current.getDate();
            break;
          case current.getMonth() + 1 === 10 && current.getDate() + 9 <= 31:
            data.max =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            data.min = data.min =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              current.getDate();
            break;
          case current.getMonth() + 1 === 12 && current.getDate() + 9 > 31:
            data.max =
              current.getFullYear() +
              1 +
              "-0" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 22);
            data.min = data.min =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              current.getDate();
            break;
          case current.getMonth() + 1 === 12 && current.getDate() + 9 <= 31:
            data.max =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            data.min = data.min =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              current.getDate();
            break;
          case current.getDate() + 9 === 31:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            break;
          case current.getDate() + 9 > 31:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 22);
            break;
          case current.getDate() + 9 <= 31:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            break;
          default:
            console.log("Error");
            break;
        }
        break;
      case 2:
      case 4:
      case 6:
      case 9:
      case 11:
        switch (true) {
          case current.getMonth() + 1 === 9 && current.getDate() + 9 > 30:
            data.max =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 20);
            break;
          case current.getMonth() + 1 === 11 && current.getDate() + 9 > 30:
            data.max =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 20);
            data.min = data.min =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              current.getDate();
            break;
          case current.getMonth() + 1 === 11 && current.getDate() + 9 <= 30:
            data.max =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            data.min = data.min =
              current.getFullYear() +
              "-" +
              (current.getMonth() + 1) +
              "-" +
              current.getDate();
            break;
          case current.getDate() + 9 === 30:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            break;
          case current.getDate() + 9 >= 30:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 2) +
              "-0" +
              (current.getDate() - 20);
            break;
          case current.getDate() + 9 <= 30:
            data.max =
              current.getFullYear() +
              "-0" +
              (current.getMonth() + 1) +
              "-" +
              (current.getDate() + 9);
            break;
          default:
            console.log("Error");
            break;
        }
        break;
      default:
        //以上都不符合走這個
        console.log("Error");
        break;
    }
  }

  orderTime = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.props.onChange(value, name);
  };
  orderData = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.props.onChange(value, name);

    //將可訂購時間丟入陣列，當使用者選擇日期時觸發
    const data = new Date();
    const BusinessHours = ['10:00','10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55'
    ,'11:00','11:05','11:10','11:15','11:20','11:25','11:30','11:35','11:40','11:45','11:50','11:55'
    ,'12:00','12:05','12:10','12:15','12:20','12:25','12:30','12:35','12:40','12:45','12:50','12:55'
    ,'13:00','13:05','13:10','13:15','13:20','13:25','13:30','13:35','13:40','13:45','13:50','13:55'
    ,'14:00','14:05','14:10','14:15','14:20','14:25','14:30','14:35','14:40','14:45','14:50','14:55'
    ,'15:00','15:05','15:10','15:15','15:20','15:25','15:30','15:35','15:40','15:45','15:50','15:55'
    ,'16:00','16:05','16:10','16:15','16:20','16:25','16:30','16:35','16:40','16:45','16:50','16:55'
    ,'17:00','17:05','17:10','17:15','17:20','17:25','17:30','17:35','17:40','17:45','17:50','17:55'
    ,'18:00','18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50','18:55'
    ,'19:00','19:05','19:10','19:15','19:20','19:25','19:30','19:35','19:40','19:45','19:50','19:55'
    ,'20:00','20:05','20:10','20:15','20:20','20:25','20:30'];
    let taketime = document.getElementById("taketime");
    let UserOrderTime = document.getElementById("takedate").value;

    let UserOrderHour = UserOrderTime;

    let UserOrderDate = UserOrderHour.split("-", 3); //以"-"切割年月日，並將日期獨立取出

    if (
      UserOrderDate[2] === String(data.getDate()) &&
      data.getHours() >= 10 &&
      data.getHours() < 20 &&
      data.getMinutes() < 15 &&
      data.getMinutes() >= 0
    ) {
      UserOrderTime = data.getHours() + ":45"; //考慮到選擇商品時間，會將時間自動以15分為基準加半小時，範圍0-14分
      let FirstAvailableTime = BusinessHours.indexOf(UserOrderTime);
      let UserOrderHour = 0;

      for (let i = FirstAvailableTime; i < BusinessHours.length; i++) {
        taketime.options[UserOrderHour] = new Option(BusinessHours[i]);
        UserOrderHour = UserOrderHour + 1;
      }
      this.props.onChange(UserOrderTime, "taketime");
    } else if (
      UserOrderDate[2] === String(data.getDate()) &&
      data.getHours() >= 10 &&
      data.getHours() < 20 &&
      data.getMinutes() < 30 &&
      data.getMinutes() >= 15
    ) {
      //範圍15-29分
      UserOrderTime = data.getHours() + 1 + ":00";
      let FirstAvailableTime = BusinessHours.indexOf(UserOrderTime);
      let UserOrderHour = 0;
      for (let i = FirstAvailableTime; i < BusinessHours.length; i++) {
        taketime.options[UserOrderHour] = new Option(BusinessHours[i]);
        UserOrderHour = UserOrderHour + 1;
      }
      this.props.onChange(UserOrderTime, "taketime");
    } else if (
      UserOrderDate[2] === String(data.getDate()) &&
      data.getHours() >= 10 &&
      data.getHours() < 20 &&
      data.getMinutes() < 45 &&
      data.getMinutes() >= 30
    ) {
      //範圍30-44分
      UserOrderTime = data.getHours() + 1 + ":00";
      let FirstAvailableTime = BusinessHours.indexOf(UserOrderTime);
      let UserOrderHour = 0;
      for (let i = FirstAvailableTime; i < BusinessHours.length; i++) {
        taketime.options[UserOrderHour] = new Option(BusinessHours[i]);
        UserOrderHour = UserOrderHour + 1;
      }
      this.props.onChange(UserOrderTime, "taketime");
    } else if (
      UserOrderDate[2] === String(data.getDate()) &&
      data.getHours() >= 10 &&
      data.getHours() < 20 &&
      data.getMinutes() < 60 &&
      data.getMinutes() >= 45
    ) {
      //範圍45-59分
      UserOrderTime = data.getHours() + 1 + ":30";
      let FirstAvailableTime = BusinessHours.indexOf(UserOrderTime);
      let UserOrderHour = 0;
      for (let i = FirstAvailableTime; i < BusinessHours.length; i++) {
        taketime.options[UserOrderHour] = new Option(BusinessHours[i]);
        UserOrderHour = UserOrderHour + 1;
      }
      this.props.onChange(UserOrderTime, "taketime");
    } else if (UserOrderDate[2] !== String(data.getDate())) {
      for (let i = 0; i < BusinessHours.length; i++) {
        taketime.options[i] = new Option(BusinessHours[i]);
      }
      this.props.onChange(BusinessHours[0], "taketime");
    } else {
      alert("請在早上10點後及晚上8點前訂購哦~"); //如未在許可時間範圍訂購將跳出提醒，並清空值防止訂購資訊錯誤
      value = "";
      this.props.onChange(value, name);
    }
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="date"
          id="takedate"
          className="form-control col-sm-6 col-12"
          name="takedate"
          onChange={this.orderData}
          value={this.props.data}
          required="required"
        />
        <select
          id="taketime"
          name="taketime"
          className="form-control col-sm-6 col-12"
          onChange={this.orderTime}
          value={this.props.time}
          required="required"
        />
      </React.Fragment>
    );
  }
}
export default DataPicker;
