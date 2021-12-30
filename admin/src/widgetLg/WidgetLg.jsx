import React from "react";
import "./widgetLg.css";
const WidgetLg = () => {
    const Button =({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgteLgUser">
            <img
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
              className="WidgetLgImg"
            />
            <span className="widgetLgName">Manas Saxena</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"></Button></td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgteLgUser">
            <img
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
              className="WidgetLgImg"
            />
            <span className="widgetLgName">Manas Saxena</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"></Button></td>
        </tr><tr className="WidgetLgTr">
          <td className="WidgteLgUser">
            <img
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
              className="WidgetLgImg"
            />
            <span className="widgetLgName">Manas Saxena</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"></Button></td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
