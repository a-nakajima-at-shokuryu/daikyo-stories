import React, { useState } from 'react'; 
import DatePicker from '../components/DatePicker'; 

export default {
  title: '納品日入力', 
}; 

export const Nohinb = () => {
  // ステートフック
  const [nohinbi, setNohinbi] = useState(new Date())

  // 納品日変更時
  const doNohinbiChange = date => {
    if (date !== null) {
      if (date.toString() !== "Invalid Date") {
        setNohinbi(date)
      }
    }
  }

  return (
    <DatePicker 
      nohinb={nohinbi}
      doNohinbiChange={doNohinbiChange}
    />
  );
};
