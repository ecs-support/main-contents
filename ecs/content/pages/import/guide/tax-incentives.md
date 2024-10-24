---
linktitle: สิทธิประโยชน์ทางภาษี
summary: สิทธิประโยชน์ทางภาษีอากร
title: สิทธิประโยชน์ทางภาษีอากร
date: "2020-05-19T00:00:00Z"
lastmod: "2020-05-19T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: false 
type: series  
tags: ["คู่มือการนำเข้า"]
categories: ["การนำเข้า"]
authors: ["admin"]
menu:
  guide:
    parent: คู่มือพิธีการนำเข้า 
    weight: 18

weight: 18
---


{{< collapsible "ขอคืนอากรตามมาตรา 29" >}}

# ขอคืนอากรตามมาตรา 29


- ระบุ 19bis = Y ที่ส่วนรายการในใบขนสินค้า
- ระบุ Import Tax Incentives ID = เลขที่ทะเบียนผู้ใช้สิทธิตามมาตรา 29 ที่ส่วนรายการในใบขนสินค้า
- ระบุ Privilege Code 
	- **กรณีชำระอากร** **ให้ระบุตามสิทธิที่มีขณะนำเข้า** เช่น มาตรา 12, WTO, TAU, AFTA  
เป็นต้น และต้องคำนวณค่าภาษีอากรตามปกติ
- **กรณีวางประกัน** ตามมาตรา 30  ให้ระบุ Privilege Code = 000 ตามอัตราปกติเท่านั้น


- การชำระอากรตรวจสอบกับหลักการ ตามมาตรา 29 เช่น
   - **ชำระอากรเต็มจำนวน** 
   - **ลดเหลือกึ่งหนึ่ง**จากอากรที่เรียกเก็บเป็นการทั่วไป ตามมาตรา 12 พระราชกำหนดพิกัดอัตราศุลกากร (สำหรับ จดทะเบียนตลาดหลักทรัพย์, บริษัทมหาชนจำกัด, สมาชิกสภาอุตสาหกรรม, สมาชิกหอการค้า, อื่น ๆ) ให้บันทึก Exemption Rate = 50 
   -  **ลดเหลือร้อยละ 5** จากอากรที่เรียกเก็บเป็นการทั่วไป ตามมาตรา 12 พระราชกำหนดพิกัดอัตราศุลกากร (สำหรับ Gold Card) ให้บันทึก Exemption Rate = 95 
- วางประกันตามมาตรา 30 สำหรับของนำเข้าตามมาตรา 29  ให้บันทึกการวางประกัน โดย **ระบุรหัสเหตุผลการวางประกันมาในช่อง Deposit Reason Code (D09)**  ที่ส่วนรายการในใบขนสินค้า (Deposit)  ระบุจำนวนเงินวางประกันมาในช่อง Deposit Amount ที่ส่วนรายการในใบขนสินค้า (Duty) และที่ส่วนรายการในใบขนสินค้า (Deposit)


   - อากรศุลกากร ให้ยกยอดจากอากรศุลกากรที่ตรวจสอบกับหลักการ มาวางประกัน
   - **ภาษีสรรพสามิตและค่าภาษีอากรอื่น ๆ ต้องวางประกันเต็มจำนวน**
   -  **VAT ต้องชำระเต็ม ไม่สามารถวางประกันได้**
   - **การวางประกันให้** **ปัดเศษของสตางค์ (ทศนิยมหลักที่ 3) ตามหลักสากล**

{{< /collapsible >}}


{{< collapsible "คลังสินค้าทัณฑ์บน (Bonded Warehouse)" >}}

# คลังสินค้าทัณฑ์บน


 - ระบุ Bond = Y ที่ส่วนรายการในใบขนสินค้า
 - ระบุ Import Tax Incentives ID = เลขที่ทะเบียนผู้ใช้สิทธิประโยชน์ทางภาษีอากร ที่นำสินค้า
เข้าเก็บ ที่ส่วนรายการในใบขนสินค้า
 - ให้ระบุเลขประจำตัวผู้เสียภาษีอากรของผู้นำเข้าตรงกับเลขประจำตัวผู้เสียภาษีอากรที่จดทะเบียนคลังสินค้าทัณฑ์บน หรือผู้ที่เจ้าของคลังแจ้งอนุญาตไว้กับกรมศุลกากร
 - ระบุ Privilege Code ตามสิทธิที่มีขณะนำเข้า เช่น มาตรา 12, WTO, TAU, AFTA เป็นต้น และต้องคำนวณค่าภาษีอากรตามปกติ
 - ใช้สิทธิยกเว้นอากรให้ใส่ Exemption Rate = 100
 - ระบุรหัสสถานที่นำเข้า (Discharge Port) เป็นรหัสสถานที่ของศุลกากร ณ ด่านศุลกากร ที่นำของเข้า (First Port)
 - **ระบุรหัสสถานที่ตรวจปล่อย (Release Port) ให้บันทึกข้อมูลรหัสสถานที่ตรวจปล่อย (Release Port) เป็น ด่านศุลกากร ที่นำของเข้า (First Port)**  

{{< /collapsible >}}

{{< collapsible "เขตปลอดอากร (Freezone) " >}}
# เขตปลอดอากร

**เขตปลอดอากร (Free Zone)**


 - ระบุ Free Zone = Y ที่ส่วนรายการในใบขนสินค้า
 - ระบุ Import Tax Incentives ID = เลขที่ทะเบียนผู้ใช้สิทธิประโยชน์ทางภาษีอากร ที่นำสินค้า
เข้าเก็บ ที่ส่วนรายการในใบขนสินค้า
 - ให้ระบุเลขประจำตัวผู้เสียภาษีอากรของผู้นำเข้าตรงกับเลขประจำตัวผู้เสียภาษีอากรที่จดทะเบียนผู้ประกอบการในเขต Free Zone หรือ ผู้ที่ผู้ประกอบการในเขต Free Zone แจ้งอนุญาตไว้กับกรมศุลกากร
 - ระบุ Privilege Code ตามสิทธิที่มีขณะนำเข้า เช่น มาตรา 12, WTO, TAU, AFTA เป็นต้น และต้องคำนวณค่าภาษีอากรตามปกติ
 - ใช้สิทธิยกเว้นอากรให้ใส่ Exemption Rate = 100
 - ระบุรหัสสถานที่นำเข้า (Discharge Port) เป็นรหัสสถานที่ของศุลกากร ณ ด่านศุลกากรที่
นำของเข้า (First Port) หรือโรงพักสินค้าหรือที่มั่นคง ซึ่งเป็นที่ตรวจและเก็บสินค้าดังกล่าว
 - ระบุรหัสสถานที่ตรวจปล่อย (Release Port) ให้บันทึกข้อมูลรหัสสถานที่ตรวจปล่อย (Release Port) เป็น ด่านศุลกากร ที่นำของเข้า (First Port)

{{< /collapsible >}}

{{< collapsible "เขตประกอบการเสรี (Freetrade Zone)" >}}
# เขตประกอบการเสรี

**เขตประกอบการเสรี (นิคมอุตสาหกรรม)**


 - ระบุ I-EA-T = Y ที่ส่วนรายการในใบขนสินค้า
 - ระบุ Import Tax Incentives ID = เลขที่ทะเบียนผู้ใช้สิทธิประโยชน์ทางภาษีอากร ที่นำสินค้า
เข้าเก็บ ที่ส่วนรายการในใบขนสินค้า
 - ให้ระบุเลขประจำตัวผู้เสียภาษีอากรของผู้นำเข้า ตรงกับเลขประจำตัวผู้เสียภาษีอากร ที่จดทะเบียนผู้ประกอบการในเขตประกอบการเสรี หรือ ผู้ที่ผู้ประกอบการในเขตประกอบการเสรี แจ้งอนุญาตไว้กับกรมศุลกากร
 - ระบุ Privilege Code ตามสิทธิที่มีขณะนำเข้า เช่น มาตรา 12, WTO, TAU, AFTA เป็นต้น และต้องคำนวณค่าภาษีอากรตามปกติ
 - ใช้สิทธิยกเว้นอากรให้ใส่ Exemption Rate = 100
 - ระบุรหัสสถานที่นำเข้า (Discharge Port) เป็นรหัสสถานที่ของศุลกากร ณ ด่านศุลกากรที่
นำของเข้า (First Port) หรือโรงพักสินค้าหรือที่มั่นคง ซึ่งเป็นที่ตรวจและเก็บสินค้าดังกล่าว
 - ระบุรหัสสถานที่ตรวจปล่อย (Release Port) ให้บันทึกข้อมูลรหัสสถานที่ตรวจปล่อย (Release Port) เป็น ด่านศุลกากร ที่นำของเข้า (First Port)

{{< /collapsible >}}

{{< collapsible "ส่งเสริมการลงทุน (BOI)" >}}
# ส่งเสริมการลงทุน (BOI)


- ระบุ BOI = Y ที่ส่วนรายการในใบขนสินค้า
- ระบุ เลขที่บัตรส่งเสริมการลงทุน BOI ในช่อง BOI License Number ที่ส่วนรายการในใบขนสินค้า
- Privilege Code = 000 ตามอัตราปกติ หรือ 999 ตามพระราชกำหนด เท่านั้น
- ระบุเลขที่อนุมัติสั่งปล่อยของ BOI ส่วนใบอนุญาต 
- การชำระอากร ให้ระบุ Exemption Rate = ตามที่ BOI อนุมัติให้ เช่น
- ยกเว้นอากร ให้บันทึก Exemption Rate = **100**
	- ลดเหลือกึ่งหนึ่ง ให้บันทึก Exemption Rate = **50** 
	- ลดเหลือร้อยละ 5 ให้บันทึก Exemption Rate = **95**
	- การวางประกัน ให้ระบุรหัสเหตุผลการวางประกันมาในช่อง Deposit Reason Code **(D10)** ที่ส่วนรายการในใบขนสินค้า (Deposit)  ระบุจำนวนเงินวางประกันมาในช่อง Deposit Amount ที่ส่วนรายการใน  ใบขนสินค้า (Duty) และที่ส่วนรายการในใบขนสินค้า (Deposit)
- อากรศุลกากร ให้ระบุยอดวางประกัน ตามที่ BOI อนุมัติให้ 
- VAT ให้ระบุยอดวางประกัน ตามที่ BOI อนุมัติให้
-  *ภาษีสรรพสามิตและภาษีเพื่อมหาดไทย ต้องชำระเต็ม เท่านั้น*

{{< /collapsible >}}

{{< collapsible "Re-Export" >}}

# Re-Export

**สิทธิคืนอากรของส่งกลับไปยังต่างประเทศ (Re-Export) ตามมาตรา  28** แห่งพระราชบัญญัติศุลกากร 

1. ผู้นำของเข้ามาในราชอาณาจักรและเสียอากรแล้ว หากส่งของนั้นกลับออกไปนอกราชอาณาจักร หรือส่งไปเป็นของใช้สิ้นเปลืองในเรือหรืออากาศยานที่เดินทางออกไปนอกราชอาณาจักรให้มีสิทธิขอคืนอากร
ขาเข้าสำหรับของนั้นเก้าในสิบส่วนหรือส่วนที่เกินหนึ่งพันบาทของจำนวนที่ได้เรียกเก็บไว้โดยคำนวณตาม
ใบขนสินค้าขาออกแต่ละฉบับ แล้วแต่จำนวนใดจะสูงกว่า ตามหลักเกณฑ์ดังต่อไปนี้
	- ต้องพิสูจน์ได้ว่าเป็นของรายเดียวกันกับที่นำเข้ามาในราชอาณาจักร
	- ต้องไม่นำของนั้นไปใช้ประโยชน์ในระหว่างที่อยู่ในราชอาณาจักร เว้นแต่การใช้ประโยชน์เพื่อส่งของนั้นกลับออกไปนอกราชอาณาจักร และมิได้เปลี่ยนแปลงสภาพหรือลักษณะแห่งของนั้น
	- ได้ส่งของนั้นกลับออกไปนอกราชอาณาจักรภายในกำหนดหนึ่งปีนับแต่วันที่นำของนั้นเข้ามาในราชอาณาจักร และ
	- ต้องขอคืนอากรภายในกำหนดหกเดือนนับแต่วันที่ส่งของนั้นกลับออกไปนอกราชอาณาจักร
2. กรณีของที่จะส่งกลับออกไปนอกราชอาณาจักรยังมิได้มีการปล่อยออกไปจากอารักขาของศุลกากร 

- **ระบุ Re-Export  = Y ที่ส่วนรายการในใบขนสินค้าทุกรายการ**
- มีเงื่อนไขต้องส่งกลับออกไปนอกราชอาณาจักรทั้งฉบับ โดยให้ **ชำระค่าภาษีอากรหนึ่งใน 10 หรือไม่เกิน 1,000 บาท** _ต่อใบขนสินค้าขาเข้า_
- ระบุ Privilege Code ตามสิทธิที่มีขณะนำเข้า เช่น มาตรา 12, WTO, TAU, AFTA เป็นต้น
- ระบุ**Tariff Code** พิกัดอัตราศุลกากร **ให้ตรงกับชนิดของที่จะส่งกลับออกไป**
- อัตราอากร ใช้ Tariff Code และ Tariff Sequence ไปอ่านอัตราอากรที่ Table REFDRT

3. วิธีการคำนวณ
   
![enter image description here](https://github.com/yosarawut/KnowledgeCenter/raw/master/img/e-Import-105-2.png)


- ให้**จัดทำใบขนสินค้าขาเข้าก่อน** และนำ เลขที่ใบขนสินค้าขาเข้าพร้อมรายการไปบันทึกไว้ในใบขนสินค้าขาออก
- กรณีของที่จะส่งกลับออกไปนอกราชอาณาจักร  *อยู่นอกอารักขาของศุลกากรแล้ว* ให้ทำใบขนสินค้าขาเข้าปกติ และจัดทำใบขนสินค้าขาออกโดยระบุในแต่ละรายการที่ส่งออกเป็น Re-Export  และให้ระบุเลขที่ใบขนสินค้าขาเข้าพร้อมรายการ   แล้วไปดำเนินการขอคืนอากรในระบบคืนอากรทั่วไปเมื่อส่งออกเรียบร้อยแล้ว



- กรณีของที่จะส่งกลับออกไปนอกราชอาณาจักรเพียงบางส่วน อนุญาตให้ทำ Re-Export ในอารักขาโดยให้ ชำระค่าภาษีอากรหนึ่งใน 10 หรือไม่เกิน 1,000 บาท ต่อใบขนสินค้าขาเข้า  *เฉพาะกรณีที่สามารถแยก D/O ได้เท่านั้น*

{{< /collapsible >}}


