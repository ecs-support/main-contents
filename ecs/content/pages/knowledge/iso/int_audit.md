---
linktitle: การตรวจสอบ ด้านเทคโนโลยีสารสนเทศ
title: การตรวจสอบ ด้านเทคโนโลยีสารสนเทศ
date: "2021-08-28T00:00:00Z"
lastmod: "2021-08-28T00:00:00Z"
draft: false # Is this a draft? true/false
toc: false # Show table of contents? true/false
type: series # Do not modify.
categories: ["ISO 27001", "คลังความรู้"]
tags: ["การตรวจสอบ"]
authors: ["admin"]

menu:
  iso:
    parent: มาตรฐาน ISO 27001
    weight: 4

weight: 4
---

ในการดำเนินงานขององค์กรจะมีระบบงานต่างๆ ที่จะขับเคลื่อนให้การทำงานขององค์กร สามารถบรรลุ ผลสำเร็จ โดยอาศัยระบบเทคโนโลยีสารสนเทศเป็นเครื่องมือช่วยสนับสนุนการปฏิบัติงานให้เกิดความสะดวก คล่องตัว และรวดเร็วยิ่งขึ้น โดยผ่านระบบ Application ซึ่งเป็นโปรแกรมการปฏิบัติงานต่างๆ ภายในระบบเทคโนโลยีสารสนเทศ ความเสี่ยง เริ่มตั้งแต่การนำข้อมูลเข้า เช่น งานจัดเก็บรายได้ของกรมสรรพสามิต อาจมีความเสี่ยงระบบล่ม ไม่สามารถบันทึกข้อมูลได้ หรือระบบถูกบุคคลที่ไม่ได้รับอนุญาตเข้าใช้ข้อมูล

## การควบคุมภายในด้านเทคโนโลยีสารสนเทศ

ประกอบด้วยการควบคุมทั่วไป (General Control) และการควบคุมเฉพาะระบบงาน (Application Control)

### การควบคุมทั่วไป (General Control)

หมายถึง การควบคุมในส่วนที่เกี่ยวข้องกับสภาพแวดล้อมของการควบคุม นโยบายและวิธีการในการควบคุม ระบบสารสนเทศ การควบคุมความปลอดภัย การควบคุมการพัฒนาและปรับปรุง และการป้องกัน/ลดความเสียหาย ของระบบ เป็นการควบคุมภายในสำหรับองค์กรในภาพรวม

1. **การกำหนดนโยบายในการใช้สารสนเทศ**
   - มีนโยบายการรักษาความปลอดภัย ด้านระบบเทคโนโลยีสารสนเทศที่ชัดเจนว่าใครต้องการเข้าถึง ข้อมูลอะไร เมื่อไหร่ ในระบบงานใด
  - การให้สิทธิในการเข้าถึงข้อมูลเฉพาะบุคคลที่มีสิทธิในการเข้าถึงข้อมูลนั้น
2. **การแบ่งแยกหน้าที่งานในระบบสารสนเทศ** มีการแบ่งแยกหน้าที่ความรับผิดชอบของผู้ปฏิบัติงานในระบบงานคอมพิวเตอร์ให้ชัดเจน เช่น แยกหน้าที่ การพัฒนาระบบออกจากหน้าที่ผู้ปฏิบัติการคอมพิวเตอร์ ผู้บริหารฐานข้อมูล (Database Administrator) ต้องไม่ทำหน้าที่อื่น ผู้พัฒนาระบบออกจากผู้ดูแลบำรุงรักษาระบบ
3. **การควบคุมโครงการพัฒนาระบบสารสนเทศ** โดยกำหนดแผนระยะยาว แผนงานพัฒนาระบบ กำหนดการประมวลผลข้อมูล มอบหมายหน้าที่ และความรับผิดชอบ การประเมินผลงานระหว่างการดำเนินโครงการ การสอบทานภายหลังการติดตั้งระบบ และนำระบบมาใช้งาน การวัดผลการดำเนินงานของระบบ
4. **การควบคุมการเปลี่ยนแปลงแก้ไขระบบ** โดยการกำหนดระเบียบวิธีปฏิบัติในการแก้ไขระบบที่เป็นลายลักษณ์อักษร มีการศึกษาถึงผลกระทบต่างๆ มีการทดสอบระบบที่แก้ไขแล้วก่อนนำไปใช้ จัดทำเอกสารคู่มือประกอบการแก้ไข และประเมินผลและสอบทาน ระบบงานภายหลังเริ่มใช้
5. **การควบคุมการปฏิบัติงานในศูนย์คอมพิวเตอร์**   การประมวลผลข้อมูลของระบบงานต่างๆ มีความถูกต้อง ครบถ้วน การกู้ระบบและการสำรองข้อมูล การทดสอบ และการจัดการกับปัญหาของระบบ จัดทำแผนสำรอง
6. **การควบคุมเข้าถึงอุปกรณ์คอมพิวเตอร์**  มีสถานที่จัดเก็บอุปกรณ์คอมพิวเตอร์มิดชิด ไม่มีอากาศร้อน ชื้น และแม่เหล็ก มีการรักษาความปลอดภัย หนาแน่น กำหนดการเข้าออกได้เฉพาะผู้เกี่ยวข้อง กำหนดนโยบายรักษาความปลอดภัยที่ชัดเจน ติดระบบเตือนภัย กรณีมีผู้บุกรุก จำกัดให้ใช้โทรศัพท์เฉพาะเรื่องที่เกี่ยวกับงาน ติดอุปกรณ์ป้องกันเครื่องคอมพิวเตอร์
7. **การควบคุมการเข้าถึงข้อมูลและทรัพยากรสารสนเทศ**  การกำหนดผู้ใช้ (User Views or Subschema) ตารางแสดงสิทธิในการเข้าถึงฐานข้อมูล (Database Authorization Table) และการเข้ารหัสข้อมูล (Data Encryption)
8. **การควบคุมการเข้าถึงระบบงาน**
   - การพิสูจน์ตัวจริง (Authentication) โดยกำหนดรหัสผ่าน (Password) การระบุตัวตนด้วยสิ่งที่มีทางกายภาพ (Physical Possession Identification)
   - การกำหนดสิทธิ์ (Authorization)
   - การบันทึกกิจกรรมต่างๆ ในระบบเพื่อการตรวจสอบ (Audit Logging)

## การควบคุมเฉพาะระบบงาน (Application Control)

การควบคุมรายการข้อมูลในแต่ละระบบงานให้มีความถูกต้องและครบถ้วน โดยอาศัยทางเดินของข้อมูล เป็นแนวทางในการกำหนดขอบเขตการควบคุม เช่น ระบบ GFMIS

1. การควบคุมการนำเข้าข้อมูล การควบคุมเกี่ยวกับงานจัดทำข้อมูลก่อนป้อนเข้าสู่ระบบคอมพิวเตอร์ การเตรียมข้อมูลนำเข้า การป้องกันข้อผิดพลาด การค้นหาข้อผิดพลาด และการแก้ไขข้อผิดพลาด เช่น การตรวจสอบ ตัวเลขตรวจสอบ (Check digit) ว่าเป็นตัวเลขที่ถูกหรือไม่ โดยเลขประจำตัว หรือรหัสสินค้า หรือเลขที่บัญชี
2. การควบคุมการทำรายการป้อนเข้าสู่ระบบงาน โดยข้อมูลที่ป้อนเข้าสู่ระบบจะต้องถูกหลักเกณฑ์ ในการทำรายการ นอกจากนี้ยังรวมถึงเรื่องที่เกี่ยวกับการกระทบยอดข้อมูลนำเข้าเพื่อพิสูจน์ความถูกต้อง
3. การควบคุมการสื่อสารข้อมูลให้มีความถูกต้องและครบถ้วน ซึ่งจะต้องคำนึงถึง Hardware และ Software ที่ใช้ในการสื่อสารข้อมูลการมอบอำนาจ
4. การควบคุมการประมวลผลด้วยคอมพิวเตอร์ ให้มีความแม่นยำ ถูกต้อง และครบถ้วนเป็นไปตามหลักเกณฑ์ การใช้แฟ้มข้อมูล การชี้แนะให้เห็นข้อผิดพลาด และการรายงาน
5. การควบคุมการจัดเก็บข้อมูลไว้ในระบบ การกำหนดสิทธิการใช้ข้อมูล การรักษาความปลอดภัย การแก้ไขข้อผิดพลาด การสำรองข้อมูล และการกำหนดอายุการจัดเก็บแฟ้มข้อมูล
6. การควบคุมผลลัพธ์ การกระทบยอดข้อมูลนำเข้าและผลลัพธ์ เพื่อพิสูจน์ความถูกต้องด้วยระบบ Manual ซึ่งเป็นหน้าที่โดยตรงของหน่วยงานควบคุมคุณภาพข้อมูล

## การตรวจสอบการควบคุมทั่วไป

โดยตรวจสอบในเรื่อง การวางแผนระยะยาวและแผนระยะสั้น การจัดโครงสร้างงานสารสนเทศมีความเหมาะสม ชัดเจน (การแบ่งแยกหน้าที่เหมาะสม) การพัฒนาและการเปลี่ยนแปลงแก้ไขระบบงาน การรักษาความปลอดภัยระบบ สารสนเทศ การปฏิบัติการคอมพิวเตอร์ (การปิดเปิดระบบ การบำรุงรักษา การจัดเก็บ) การจัดทำแผนกู้ระบบสารสนเทศ

## การตรวจสอบการควบคุมเฉพาะระบบงาน

โดยการตรวจสอบในเรื่อง การกำหนดสิทธิในการใช้งานมีความเหมาะสมกับหน้าที่ความรับผิดชอบหรือไม่ การแบ่งแยกหน้าที่ในระบบงานสารสนเทศ การนำเข้าข้อมูลและรายการ การรับส่งข้อมูลระหว่างระบบงาน การประมวลผลในระบบงาน การนำผลลัพธ์ไปใช้งานครบถ้วนถูกต้องหรือไม่ มีการจัดเก็บเหมาะสมหรือไม่

## กระบวนการตรวจสอบระบบสารสนเทศ

มีกระบวนการเช่นเดียวกับตรวจสอบภายในประเภทอื่นๆ โดยเริ่มตั้งแต่ผู้ตรวจสอบภายในศึกษาทำความเข้าใจ ระบบงานสารสนเทศ (การควบคุมและความเสี่ยง) ประเมินความเสี่ยงเพื่อวางแผนการตรวจสอบ จัดทำแผนตามผลประเมินความเสี่ยง จัดทำแผนการตรวจสอบระยะยาว แผนการตรวจสอบประจำปี แผนการปฏิบัติงาน จัดทำกระดาษทำการ สรุปข้อเท็จจริง รายงานผลการตรวจสอบ และการติดตามผลการตรวจสอบ ทั้งนี้ ผู้ตรวจสอบ ระบบสารสนเทศต้องมีความรู้ ความเชี่ยวชาญเกี่ยวกับระบบเทคโนโลยีสารสนเทศ เช่น ตรวจสอบระบบ GFMIS ต้องมี ความรู้ ความเข้าใจในระบบ SAP และความเสี่ยงการควบคุมภายในของระบบเทคโนโลยีสารสนเทศ โดยพิจารณาจาก Flowchart การทดสอบความเชื่อมโยงของระบบ เป็นต้น

> Reference :

- [สำนักกำกับและพัฒนาการตรวจสอบภาครัฐ](http://inter-test.cgd.go.th/cs/Satellite?blobcol=urldata&blobheadername1=Content-Type&blobheadername2=Content-Disposition&blobheadervalue2=inline;%20filename=%22947/156/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%A8.pdf%22&blobkey=id&blobtable=MungoBlobs&blobwhere=1438165476137&ssbinary=true)
