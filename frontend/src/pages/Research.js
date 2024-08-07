import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : การศึกษาประสิทธิภาพเชิงเปรียบเทียบของ Server Side Runtime Environment for Javascript : Node กับ Deno กับ Bun
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : ดำเนินการสอบเรียบร้อย
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รายละเอียดงานวิจัย : <br/>
            การวิจัยนี้ได้ทำการศึกษาเกี่ยวกับสถาปัตยกรรมเว็บแบบ front-end/back-end และ server-side runtime environments ได้แก่ Node, Deno และ Bun เพื่อเปรียบเทียบประสิทธิภาพการทำงาน Node เป็น runtime ที่ได้รับความนิยมสูงสุดสำหรับการพัฒนา JavaScript บนฝั่งเซิร์ฟเวอร์ เนื่องจากมีระบบนิเวศที่แข็งแกร่งและชุมชนผู้ใช้ขนาดใหญ่ Deno เป็น runtime ใหม่ที่พัฒนาโดยผู้สร้าง Node ซึ่งออกแบบมาเพื่อแก้ไขข้อจำกัดบางประการของ Node และเพิ่มความปลอดภัย Bun เป็น runtime ที่มุ่งเน้นประสิทธิภาพสูงสุดและรองรับการทำงานของ JavaScript, TypeScript และ JSX ซึ่งมีวัตถุประสงค์เพื่อ 1) เปรียบเทียบประสิทธิภาพของการทำงานของ server-side runtime environments ได้แก่ Node, Deno, และ Bun 2) เพื่อเป็นทางเลือกในการตัดสินใจเลือกใช้ runtime environments ที่เหมาะสมและมีประสิทธิภาพสูงสุดตามความต้องการของโปรเจกต์ได้อย่างเสถียรภาพ โดยการวิจัยครั้งนี้ได้ทำการทดสอบประสิทธิภาพความสามารถของ runtime environments ได้แก่ Node, Deno, และ Bun ดังนี้ 1) เวลาต่อหนึ่งคำขอ 2) ความสามารถในการให้บริการต่อวินาที โดยใช้โปรแกรม JMeter เพื่อการทดสอบ โดยแบ่งเป็นสองลักษณะหลัก คือ การร้องขอสร้างและดึงข้อมูล โดยมีสองวิธี คือ 1) ทดสอบการรับโหลด ที่มีผู้ใช้พร้อมกันเป็น 10, 50, และ 100 และ 2) ทดสอบกำหนดปริมาณการร้องขอเป็น 10, 50, 100, และ 500 คำขอ การบันทึกผลจะทำการทดสอบแต่ละเงื่อนไขจำนวน 5 ครั้ง 
ผลการวิจัย พบว่า การทดสอบการร้องขอสร้างข้อมูลและดึงข้อมูลนั้นในการร้องขอที่น้อยกว่า 500 คำร้องขอ Bun จะมีประสิทธิภาพดีที่สุด เนื่องจากสามารถตอบสนองได้รวดเร็วที่สุด แต่อาจรองรับปริมาณได้ไม่มาก ในขณะที่การร้องขอในปริมาณมากกว่า 500 คำร้องขอ Node จะมีประสิทธิภาพในการจัดการดีที่สุด เนื่องจากสามารถตอบสนองได้รวดเร็วและรองรับปริมาณการร้องขอได้มากที่สุด สำหรับ Deno หากมีการร้องขอในปริมาณน้อยกว่า 500 คำร้องขอ จะมีประสิทธิภาพดีกว่า Node และรองรับปริมาณได้มากกว่า Bun แต่ถ้ามีการร้องขอในปริมาณมากจะมีประสิทธิภาพน้อยกว่า Node และ Bun  ทั้งนี้ผลการทดสอบพบว่า Bun เป็นตัวเลือกที่มีประสิทธิภาพสูงสุดในการสร้างและการดึงข้อมูล ทั้งยังประหยัดทรัพยากรคอนเทนเนอร์ เช่น CPU หน่วยความจำ และ PIDs เหมาะสมกับงานที่มีจำนวนร้องขอน้อย อย่างไรก็ตาม หากมีจำนวนร้องขอที่สูง Node เป็นตัวเลือกที่มีประสิทธิภาพสูงสุด เนื่องจากใช้หน่วยความจำและ PIDs สูงสุด ทำให้สามารถรองรับการประมวลผลหลายกระบวนการพร้อมกันได้ดี แต่ข้อเสียคือใช้ทรัพยากรคอนเทนเนอร์มาก ซึ่งอาจเป็นปัญหาในสถานการณ์ที่มีทรัพยากรจำกัด
          </Typography>


        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
