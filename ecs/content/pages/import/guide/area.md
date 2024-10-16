---
linktitle: รหัสสถานที่นำเข้า
summary: 
title: รหัสสถานที่นำเข้า (Discharge Port )
date: "2020-05-18T00:00:00Z"
lastmod: "2020-05-18T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: false 
type: series  
tags: ["คู่มือการนำเข้า"]
categories: ["การนำเข้า"]
authors: ["admin"]

menu:
  guide:
    parent: คู่มือพิธีการนำเข้า  
    weight: 9
weight: 9
---


รหัสสถานที่นำเข้า (Discharge Port ) ให้บันทึกข้อมูลรหัสสถานที่ของศุลกากร ณ ด่านศุลกากร ที่นำของเข้า หรือโรงพักสินค้าหรือที่มั่นคงซึ่งเป็นที่ตรวจและเก็บสินค้าดังกล่าว

**รหัสสถานที่ตรวจปล่อย (Release Port)** ให้บันทึกข้อมูล ดังนี้

1. กรณีตรวจปล่อย ณ ด่านศุลกากร ที่นำของเข้า (First Port) รหัสสถานที่ตรวจปล่อย (Release Port)  ให้บันทึกข้อมูลรหัสสถานที่ตรวจปล่อย (Release Port) เป็นด่านศุลกากร ที่นำของเข้า (First Port)

2. หากประสงค์จะขออนุญาตขนย้ายสินค้าไปตรวจปล่อย ณ สถานที่อื่นนอกจากเขตด่านศุลกากร ที่นำของเข้า (First Port) ให้บันทึกข้อมูล ดังนี้

   - รหัสสถานที่ตรวจปล่อย (Release Port)  ให้บันทึกข้อมูลรหัสสถานที่ตรวจปล่อย (Release Port) เป็น  ด่านศุลกากร ที่นำของเข้า (First Port)  และ  
	- ให้บันทึกค่า **“Y” ในช่องขออนุญาตเปิดตรวจนอกสถานที่**  (Inspection request code)

  {{<hint success>}}
- *หากไม่ติดเงื่อนไขความเสี่ยง* ระบบจะสั่งการตรวจปล่อยสินค้าโดย *"ไม่ต้องมัดลวด"*
  {{< /hint>}}
    {{<hint danger>}}
- *หากติดเงื่อนไขความเสี่ยง* ระบบจะสั่งการตรวจเป็น *“ให้ไปดำเนินการมัดลวด ณ  ด่านศุลกากรที่นำของเข้า”* เพื่อนำไปตรวจปล่อยนอกสถานที่ตามที่ระบุข้อมูลไว้ ในช่องรหัสสถานที่ตรวจปล่อยนอกสถานที่ (Outside Release Port)
{{< /hint>}}




