import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";
import doctor1 from "@/assets/doctor-1.png";
import doctor2 from "@/assets/doctor-2.png";
import doctor3 from "@/assets/doctor-3.png";
import doctor4 from "@/assets/doctor-4.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import intro1 from "@/assets/intro-1.jpg";
import intro2 from "@/assets/intro-2.jpg";
import intro3 from "@/assets/intro-3.jpg";
import intro4 from "@/assets/intro-4.jpg";
import cs1 from "@/assets/cs1.jpg";
import cs2 from "@/assets/cs2.jpg";
import cs3 from "@/assets/cs3.jpg";

const makeData = (lang: string) => {
  const isKo = lang === 'ko';
  const isZh = lang === 'zh';

  return {
    clinicInfo: {
      name: isKo ? "손-테-득 동양의학 클리닉" : isZh ? "山-世-德 中医诊所" : "Phòng Khám Đông Y Sơn - Thế - Đức",
      shortName: isKo ? "손-테-득" : isZh ? "山-世-德" : "Sơn Thế Đức",
      phone: "0944 564 078",
      email: "service@sontheduc.vn",
      address: isKo ? "하노이 뚜리엠 딘똔 길 182번 골목 17번" : isZh ? "河内慈廉亭村路182巷17号" : "Số 17, ngõ 182 đường Đình Thôn, Từ Liêm, Hà Nội",
      workingHours: isKo ? "월 - 일: 9:00 - 19:00" : isZh ? "周一至周日：9:00 - 19:00" : "Thứ 2 - Chủ nhật: 9:00 - 19:00",
    },
    services: [
      {
        id: "kham-tu-van",
        title: isKo ? "한의학 진찰 및 상담" : isZh ? "中医问诊与咨询" : "Khám, tư vấn Y học cổ truyền",
        description: isKo ? "정확한 한의학 진단을 통해 각 환자에게 적합한 치료 계획을 수립합니다." : isZh ? "中医精准诊断，制定适合每位患者的治疗方案。" : "Chẩn đoán chính xác theo Đông y, xây dựng phác đồ điều trị phù hợp từng bệnh nhân.",
        image: service1,
        images: [service1, service2, service3],
        content: isKo ? "전통 한의학에 따른 진찰은 환자의 현재 건강 상태를 파악하는 중요한 과정입니다.\n\n## 진찰 방법 (진단)\n- **망진(望診):** 눈으로 살피기, 환자의 혈색 확인.\n- **문진(聞診):** 소리를 듣고 냄새 맡기.\n- **문진(問診):** 병력과 증상에 대해 묻고 답하기.\n- **절진(切診):** 진맥하기.\n\n## 왜 우리 클리닉을 선택해야 할까요?\n정확한 진단을 통해 몸에 무리를 주지 않는 최적의 자연 치유 요법을 제공합니다." : isZh ? "正统中医学诊疗是评估患者当前健康状态的重要环节。\n\n## 诊断方法 (四诊)\n- **望诊：** 观察面色、舌苔、神态。\n- **闻诊：** 听声息、闻气味。\n- **问诊：** 询问病史、生活习惯及当前症状。\n- **切诊：** 号脉、按压痛点。\n\n## 优势\n通过综合准确的诊断，提供适合个人体质的自然疗法方案，安全无副作用。" : "Khám bệnh theo Y học cổ truyền là quá trình chẩn đoán dựa trên 4 phương pháp cơ bản (Tứ chẩn) để tìm ra căn nguyên của bệnh.\n\n## Các phương pháp chẩn đoán (Tứ chẩn)\n- **Vọng chẩn (Quan sát):** Xem thần thái, sắc mặt, tình trạng da, rêu lưỡi...\n- **Văn chẩn (Nghe, ngửi):** Lắng nghe tiếng nói, tiếng thở, tiếng ho và ngửi mùi cơ thể.\n- **Vấn chẩn (Hỏi):** Hỏi về tiền sử bệnh, nếp sống, các triệu chứng hiện tại.\n- **Thiết chẩn (Sờ, bắt mạch):** Xem mạch, ấn nắn các vùng đau trên cơ thể.\n\n## Ưu điểm của phương pháp\nCan thiệp toàn diện, không chỉ xử lý phần ngọn (triệu chứng) mà chú trọng giải quyết từ gốc rễ. Rất an toàn, ít tác dụng phụ, mang lại sức khỏe bền vững.",
      },
      {
        id: "cham-cuu",
        title: isKo ? "침술 치료" : isZh ? "针灸治疗" : "Châm cứu trị liệu",
        description: isKo ? "빠른 통증 완화 및 기혈 순환. 근골격계 질환과 불면증에 효과적입니다." : isZh ? "快速止痛，疏通气血，对骨关节疼痛及失眠效果显著。" : "Giảm đau nhanh, lưu thông khí huyết, hiệu quả với xương khớp và mất ngủ.",
        image: service2,
        images: [service2, service3, service4],
        content: isKo ? "침술은 경혈을 자극하여 기혈의 순환을 돕고 막힌 곳을 풀어줍니다.\n\n## 주요 효과\n- **통증 완화:** 목, 어깨, 허리 통증 개선\n- **신경 통제:** 자율신경계 조절 및 불면증 치료\n- **혈액 순환 개선:** 마비 증상 및 재활 치료\n\n본 클리닉은 무균 처리된 1회용 침만을 사용하여 감염 위험을 완벽히 차단합니다." : isZh ? "针灸通过刺激经络穴位来促进气血循环，解除淤堵。\n\n## 功效与适用症状\n- **快速镇痛：** 颈肩痛、腰痛、坐骨神经痛。\n- **调节神经：** 改善失眠、头痛、压力。\n- **康复辅助：** 中风偏瘫后的神经恢复。\n\n诊所严格使用一次性无菌针具，确保绝对安全消毒。" : "Châm cứu là phương pháp dùng kim châm vào các huyệt đạo trên cơ thể nhằm kích thích lưu thông khí huyết, điều hòa các rối loạn hoạt động của tạng phủ.\n\n## Tác dụng nổi bật của châm cứu\n- **Giảm đau nhanh chóng:** Đặc biệt hiệu quả với đau vai gáy, đau thắt lưng, thần kinh tọa.\n- **Cải thiện hệ thần kinh:** Giảm tình trạng mất ngủ, căng thẳng, rối loạn tiền đình.\n- **Phục hồi di chứng:** Thường dùng cho bệnh nhân sau tai biến, liệt dây thần kinh số 7.\n\nĐội ngũ bác sĩ dùng kim châm sử dụng một lần, đảm bảo vô trùng tuyệt đối.",
      },
      {
        id: "xoa-bop-bam-huyet",
        title: isKo ? "추나 요법 및 지압" : isZh ? "推拿与点穴" : "Xoa bóp – bấm huyệt",
        description: isKo ? "근육을 이완시키고 통증을 완화하며 목, 어깨, 허리 통증 개선." : isZh ? "舒筋活血，缓解疼痛，改善颈肩头痛、腰痛及麻木。" : "Giãn cơ, giảm đau, cải thiện vận động cho cổ vai gáy, đau lưng, tê bì.",
        image: service3,
        images: [service3, service1, service5],
        content: isKo ? "지압과 추나 요법은 손의 압력을 사용하여 뭉친 근육을 풀어줍니다.\n\n## 적용 질환\n- 오십견 (어깨 통증)\n- 거북목 증후군\n- 수면 부족 및 만성 피로\n- 혈액 순환 장애" : isZh ? "推拿和点穴是使用传统手法放松紧张的肌肉，刺激穴位。\n\n## 适用症状\n- 肩周炎与鼠标手\n- 颈椎病\n- 慢性疲劳综合征\n- 肢体麻木" : "Xoa bóp bấm huyệt là liệu pháp sử dụng đôi bàn tay (các kỹ thuật day, ấn, miết, xoa) tác động vật lý lên các huyệt đạo, cơ bắp, hệ thần kinh.\n\n## Lợi ích mang lại\n- **Giãn cơ:** Làm mềm các bó cơ bị xơ cứng do ngồi sai tư thế lâu ngày.\n- **Giảm đau:** Hỗ trợ chữa nhức mỏi cổ vai gáy, tê bì chân tay.\n- **Tăng tuần hoàn máu:** Thúc đẩy lưu thông máu tĩnh mạch, giảm phù nề.\n- **Thư giãn:** Giúp người bệnh thư giãn tinh thần, dễ đi vào giấc ngủ hơn.",
      },
      {
        id: "vat-ly-tri-lieu",
        title: isKo ? "물리치료 및 재활" : isZh ? "物理治疗与康复" : "Vật lý trị liệu, phục hồi chức năng",
        description: isKo ? "운동 능력 회복 및 근골격계 기능 개선 지원." : isZh ? "辅助恢复运动能力，改善骨关节功能。" : "Hỗ trợ phục hồi vận động, cải thiện chức năng cơ xương khớp.",
        image: service4,
        images: [service4, service6, service2],
        content: isKo ? "동양의학과 현대 물리치료 장비를 결합한 재활 프로그램입니다.\n\n## 치료 기기 및 프로그램\n- 척추 견인 치료기\n- 초음파 치료기\n- 전기 자극 요법\n- 적외선 치료\n\n수술 후 재활이나 심한 관절염 환자에게 특히 추천됩니다." : isZh ? "结合中医与现代物理治疗设备的综合康复项目，加速恢复。\n\n## 治疗设备与方法\n- 脊柱牵引机\n- 超声波治疗\n- 电刺激镇痛\n- 红外线热疗\n\n非常适合骨科术后康复、中风后遗症及严重关节退化患者。" : "Sự kết hợp giữa Y học cổ truyền và thiết bị Vật lý trị liệu hiện đại giúp tăng tốc độ phục hồi cho bệnh nhân, giảm viêm và tăng cường sức mạnh cơ bắp.\n\n## Các thiết bị và phương pháp trị liệu\n- **Máy kéo giãn cột sống:** Giảm áp lực lên đĩa đệm (cho bệnh nhân thoát vị).\n- **Sóng siêu âm trị liệu:** Trị liệu sâu vào các mô cơ.\n- **Điện xung:** Giảm đau, kích thích thần kinh cơ.\n- **Hồng ngoại:** Tăng tuần hoàn máu cục bộ.\n\nThích hợp cho bệnh nhân sau chấn thương thể thao, sau phẫu thuật, hoặc thoái hóa khớp nặng.",
      },
      {
        id: "ke-don-thuoc",
        title: isKo ? "한약 처방 및 탕약" : isZh ? "开方煎药" : "Kê đơn thang thuốc - sắc thuốc",
        description: isKo ? "만성 질환에 적합한 허브 성분 근본 치료." : isZh ? "中草药根本治疗，非常适合慢性疾病。" : "Điều trị từ gốc bằng thảo dược, phù hợp bệnh mạn tính.",
        image: service5,
        images: [service5, service1, service4],
        content: isKo ? "개인의 체질에 맞춘 한약으로 병의 근본 원인을 다스립니다.\n\n## 청결한 약재\n모든 약재는 엄격한 품질 관리를 거친 100% 천연 허브입니다. 유해 방부제를 일절 사용하지 않습니다.\n\n## 편리한 탕전 서비스\n환자의 편의를 위해 첨단 전자동 탕전 시스템을 운영하고 있습니다. 진공 포장되어 위생적이며, 약효가 그대로 보존됩니다." : isZh ? "利用古方结合祖传经验，根据个人体质开具中药，从根本上调理身体。\n\n## 药材来源\n诊所承诺使用100%纯净、无污染的中药材，经过严格的质量检验，绝不使用有害防腐剂。\n\n## 代煎服务\n为了节省患者时间，诊所配备了全自动高压煎药系统，并进行无菌独立包装，既能有效保留药效，又非常方便携带和储存。" : "Sử dụng các bài thuốc cổ phương kết hợp với kinh nghiệm gia truyền nhiều thế hệ, được gia giảm tùy theo thể trạng của từng chứng bệnh.\n\n## Về nguồn dược liệu\nPhòng khám cam kết sử dụng 100% dược liệu sạch, được kiểm định nghiêm ngặt về chất lượng và độ an toàn, hoàn toàn không sử dụng chất bảo quản chống mốc độc hại.\n\n## Dịch vụ sắc thuốc sẵn (Tiện lợi)\nNhằm tiết kiệm thời gian cho bệnh nhân, phòng khám trang bị hệ thống máy sắc thuốc áp suất cao tự động. Thuốc sau khi sắc được đóng gói vô trùng vào từng túi nhỏ, giúp giữ nguyên dược tính, đảm bảo vệ sinh và bảo quản dễ dàng trong tủ lạnh.",
      },
      {
        id: "dieu-tri-khong-dung-thuoc",
        title: isKo ? "비약물 치료 요법" : isZh ? "非药物治疗" : "Điều trị không dùng thuốc",
        description: isKo ? "기공, 명상 등 장기적인 질병 예방 및 건강 증진." : isZh ? "养生气功，增强体质，长期防病。" : "Dưỡng sinh, khí công giúp tăng sức khỏe và phòng bệnh lâu dài.",
        image: service6,
        images: [service6, service3, service5],
        content: isKo ? "외부 약물에 의존하지 않고 신체 고유의 자연 치유력을 극대화하는 라이프스타일 치료입니다.\n\n## 치료 내용 및 교육\n- **기공 및 태극권:** 기혈 순환을 촉진하는 부드러운 운동.\n- **명상 요법:** 스트레스 관리 및 자율신경계 안정.\n- **식이 요법:** 체질(한/열)에 맞춘 맞춤형 식단 가이드 제공." : isZh ? "重点通过自然养生方法恢复人体的自我愈合能力。\n\n## 指导方法\n- **气功与太极：** 温和的运动，帮助调理气息与气血流通。\n- **打坐冥想：** 宁心静气，缓解压力，调节植物神经系统。\n- **养生食疗：** 根据个人的寒热体质提供专属饮食建议，建立稳固的健康防线。" : "Phương pháp này tập trung vào khôi phục khả năng tự chữa lành của cơ thể thông qua các thói quen dưỡng sinh tự nhiên, không phụ thuộc vào hóa dược.\n\n## Các phương pháp hướng dẫn\n- **Khí công, Thái cực quyền:** Hướng dẫn các bài vận động nhẹ nhàng giúp khí huyết lưu thông, tăng cường sức bền.\n- **Ngồi thiền:** Định tâm, xả stress, điều hòa hệ thần kinh thực vật, đặc biệt hữu ích cho người mất ngủ.\n- **Thuật dưỡng sinh ăn uống:** Bác sĩ sẽ tư vấn chế độ ăn uống chuyên biệt theo từng thể tạng (Hàn, Nhiệt) của mỗi người, giúp thiết lập hàng rào bảo vệ vững chắc ngay từ nguồn dinh dưỡng hàng ngày.",
      },
    ],
    doctors: [
      {
        id: 1,
        name: isKo ? "팜 반 찐 (Phạm Văn Trịnh)" : isZh ? "范文郑 (Phạm Văn Trịnh)" : "Phạm Văn Trịnh",
        title: isKo ? "부교수, 의사" : isZh ? "副教授，医生" : "Phó giáo sư, Bác sỹ",
        description: isKo ? "하노이 의과대학 전통의학과 전 부과장" : isZh ? "河内医科大学传统医学系前副主任" : "Nguyên phó trưởng bộ môn Y học cổ truyền, Đại học Y Hà Nội",
        image: doctor1,
      },
      {
        id: 2,
        name: isKo ? "응우옌 쑤언 손 (Nguyễn Xuân Sơn)" : isZh ? "阮春山 (Nguyễn Xuân Sơn)" : "Nguyễn Xuân Sơn",
        title: isKo ? "석사, 의사" : isZh ? "硕士，医生" : "Thạc sỹ, Bác sỹ",
        description: isKo ? "전통의학과 임상연구소 전 소장, 멕시코 파견 중앙침구병원 전문가" : isZh ? "传统医学临床研究所前主任，中央针灸医院派驻墨西哥专家" : "Nguyên trưởng khoa Nghiên chất, khoa Y học cổ truyền, chuyên gia tại Mexico của Viện châm cứu TW",
        image: doctor2,
      },
      {
        id: 3,
        name: isKo ? "응우옌 반 테 (Nguyễn Văn Thế)" : isZh ? "阮文世 (Nguyễn Văn Thế)" : "Nguyễn Văn Thế",
        title: isKo ? "전문의 II, 석사" : isZh ? "专科II级，硕士" : "Bác sỹ chuyên khoa II, Thạc sỹ",
        description: isKo ? "호흡기, 피부과학, 심혈관, 대사 장애 부서장. 통증 방지 및 완화 케어 담당" : isZh ? "呼吸、皮肤病、心血管及代谢紊乱科主任，疼痛及姑息护理中心负责人" : "Trưởng khoa Hô hấp, da liễu, tim mạch, rối loạn chuyển hóa, phụ trách trung tâm quốc tế Việt Xuân, đơn vị chống đau và chăm sóc giảm nhẹ",
        image: doctor3,
      },
      {
        id: 4,
        name: isKo ? "판 민 득 (Phan Minh Đức)" : isZh ? "潘明德 (Phan Minh Đức)" : "Phan Minh Đức",
        title: isKo ? "박사, 의사" : isZh ? "博士，医生" : "Tiến sỹ, Bác sỹ",
        description: isKo ? "하노이 국립대학교 부속 의학부 내과-전통의학 협력학과 부과장" : isZh ? "河内国家大学医学部内科-传统医学跨学科副主任" : "Phó trưởng bộ môn liên chuyên khoa nội - y học cổ truyền trường Đại học y dược - Đại học Quốc gia Hà Nội",
        image: doctor4,
      },
    ],
    commonDiseases: isKo ? [
      "목 및 어깨 통증", "척추 퇴행", "좌골신경통", "불면증", "관절염", "편두통 (마이그레인)", "신경 마비", "소화기 장애"
    ] : isZh ? [
      "颈肩酸痛", "脊柱退化", "坐骨神经痛", "失眠", "关节炎", "偏头痛", "神经麻痹", "消化系统紊乱"
    ] : [
      "Đau cổ vai gáy", "Thoái hóa cột sống", "Thần kinh tọa", "Mất ngủ", "Viêm khớp", "Đau đầu - Migraine", "Liệt dây thần kinh", "Rối loạn tiêu hóa",
    ],
    testimonials: [
      {
        id: 1,
        quote: isKo ? '"수년간 앓아온 어깨 통증이 5번의 치료 후 눈에 띄게 완화되었습니다."' : isZh ? '"多年遭受肩颈疼痛折磨，经过5次治疗明显好转。"' : '"Tôi bị đau vai gáy nhiều năm, sau 5 buổi điều trị đã giảm rõ."',
        author: isKo ? "환자 응우옌 반 H (Nguyễn Văn H)" : isZh ? "患者 H先生" : "Bệnh nhân Nguyễn Văn H",
        avatar: gallery6,
      },
      {
        id: 2,
        quote: isKo ? '"수년간 앓아온 어깨 통증이 5번의 치료 후 눈에 띄게 완화되었습니다."' : isZh ? '"多年遭受肩颈疼痛折磨，经过5次治疗明显好转。"' : '"Tôi bị đau vai gáy nhiều năm, sau 5 buổi điều trị đã giảm rõ."',
        author: isKo ? "환자 응우옌 반 H (Nguyễn Văn H)" : isZh ? "患者 H先生" : "Bệnh nhân Nguyễn Văn H",
        avatar: gallery6,
      },
      {
        id: 3,
        quote: isKo ? '"수년간 앓아온 어깨 통증이 5번의 치료 후 눈에 띄게 완화되었습니다."' : isZh ? '"多年遭受肩颈疼痛折磨，经过5次治疗明显好转。"' : '"Tôi bị đau vai gáy nhiều năm, sau 5 buổi điều trị đã giảm rõ."',
        author: isKo ? "환자 응우옌 반 H (Nguyễn Văn H)" : isZh ? "患者 H先生" : "Bệnh nhân Nguyễn Văn H",
        avatar: gallery6,
      },
    ],
    articles: isKo ? [
      {
        id: 1,
        slug: "dau-co-vai-gay-nguyen-nhan-va-cach-dieu-tri",
        title: "목/어깨 통증: 원인과 한의학적 치료법",
        excerpt: "직장인에게 흔한 목/어깨 통증. 원인과 한의학 치료법을 알아보세요.",
        content: "목과 어깨 통증은 근골격계 질환 중 가장 흔하며, 특히 컴퓨터 앞에서 오래 앉아있는 직장인들에게 자주 발생합니다.\n\n## 원인\n\n- 잘못된 자세\n- 경추 퇴행성 변화\n- 지속적인 스트레스\n- 운동 부족\n\n## 한의학적 치료\n\n손테득 클리닉의 병행 치료:\n1. 목/어깨 혈자리 침술\n2. 근육 이완 추나요법\n3. 기혈 순환 한약\n4. 재활 운동 가이드\n\n대부분의 환자들은 1-3회의 치료 후 확실한 통증 감소를 경험합니다.",
        image: service1,
        date: "2026-03-25",
        category: "건강 지식",
      },
      {
        id: 2,
        slug: "mat-ngu-keo-dai-giai-phap-dong-y",
        title: "만성 불면증? 약물 없는 한의학적 해결책",
        excerpt: "불면증은 건강에 심각한 영향을 미칩니다. 한의학으로 자연스럽게 숙면하는 법을 알아보세요.",
        content: "만성 불면증은 피로를 유발할 뿐만 아니라 심혈관, 신경, 면역 체계에 악영향을 미칩니다.\n\n## 한의학적 관점\n\n한의학에 따르면 불면증의 원인은 다음과 같습니다:\n- 심비 부족\n- 간의 화열\n- 신장 음허\n\n## 치료 방법\n\n- 안신, 내관, 신문 혈자리 침술\n- 심신 안정 한약 처방\n- 기혈 보충 뜸 치료\n- 야간 건강 관리 가이드",
        image: service5,
        date: "2026-03-20",
        category: "건강 지식",
      },
    ] : isZh ? [
      {
        id: 1,
        slug: "dau-co-vai-gay-nguyen-nhan-va-cach-dieu-tri",
        title: "颈肩酸痛：中医的病因与治疗",
        excerpt: "颈肩酸痛在上班族中很常见。了解其病因及中医有效疗法。",
        content: "颈肩酸痛是当前最常见的骨关节疾病之一，尤其对于长时间坐在电脑前的上班族而言。\n\n## 颈肩酸痛的原因\n\n- 坐姿不良\n- 颈椎退化\n- 长期压力和紧张\n- 缺乏运动\n\n## 中医治疗\n\n山世德诊所采用综合治疗方案：\n1. 颈肩部穴位针灸\n2. 推拿点穴放松肌肉\n3. 补肝肾、活血化瘀中药\n4. 在家康复锻炼指导\n\n大多数患者在1-3次治疗后明显感觉疼痛减轻。",
        image: service1,
        date: "2026-03-25",
        category: "健康知识",
      },
      {
        id: 2,
        slug: "mat-ngu-keo-dai-giai-phap-dong-y",
        title: "长期失眠？无西药的中医解决方案",
        excerpt: "失眠严重影响健康。探索中医如何帮助您自然安眠。",
        content: "长期失眠不仅导致疲劳，还会影响心血管、神经和免疫系统。\n\n## 中医对失眠的看法\n\n根据中医，失眠通常由以下原因引起：\n- 心脾两虚\n- 肝火旺盛\n- 肾阴虚\n\n## 治疗方法\n\n- 针灸安神、内关、神门等穴位\n- 养心安神中药方剂\n- 艾灸补气血\n- 晚间养生指导",
        image: service5,
        date: "2026-03-20",
        category: "健康知识",
      },
    ] : [
      {
        id: 1,
        slug: "dau-co-vai-gay-nguyen-nhan-va-cach-dieu-tri",
        title: "Đau cổ vai gáy: Nguyên nhân và cách điều trị bằng Đông y",
        excerpt: "Đau cổ vai gáy là tình trạng phổ biến ở dân văn phòng. Tìm hiểu nguyên nhân và phương pháp điều trị hiệu quả bằng Đông y.",
        content: "Đau cổ vai gáy là một trong những bệnh lý cơ xương khớp phổ biến nhất hiện nay, đặc biệt ở những người làm việc văn phòng, ngồi nhiều trước máy tính.\n\n## Nguyên nhân gây đau cổ vai gáy\n\n- Tư thế ngồi làm việc sai\n- Thoái hóa đốt sống cổ\n- Stress và căng thẳng kéo dài\n- Thiếu vận động\n\n## Điều trị bằng Đông y\n\nPhòng khám Sơn Thế Đức áp dụng phác đồ điều trị kết hợp:\n1. Châm cứu các huyệt vùng cổ vai gáy\n2. Xoa bóp bấm huyệt thư giãn cơ\n3. Thuốc Đông y bổ can thận, hoạt huyết\n4. Hướng dẫn bài tập phục hồi tại nhà\n\nHầu hết bệnh nhân cảm nhận giảm đau rõ rệt sau 1-3 buổi điều trị.",
        image: service1,
        date: "2026-03-25",
        category: "Kiến thức",
      },
      {
        id: 2,
        slug: "mat-ngu-keo-dai-giai-phap-dong-y",
        title: "Mất ngủ kéo dài? Giải pháp từ Đông y không dùng thuốc Tây",
        excerpt: "Mất ngủ ảnh hưởng nghiêm trọng đến sức khỏe. Khám phá cách Đông y giúp bạn ngủ ngon tự nhiên.",
        content: "Mất ngủ kéo dài không chỉ gây mệt mỏi mà còn ảnh hưởng đến tim mạch, thần kinh và hệ miễn dịch.\n\n## Quan điểm Đông y về mất ngủ\n\nTheo Đông y, mất ngủ thường do:\n- Tâm tỳ hư\n- Can hỏa vượng\n- Thận âm hư\n\n## Phương pháp điều trị\n\n- Châm cứu các huyệt An thần, Nội quan, Thần môn\n- Bài thuốc dưỡng tâm an thần\n- Cứu ngải bổ khí huyết\n- Hướng dẫn dưỡng sinh buổi tối",
        image: service5,
        date: "2026-03-20",
        category: "Kiến thức",
      },
    ]
  };
};

export const getMockData = (lang: string) => makeData(lang);

// Export static data used generally mapping to IDs or assets directly
export const galleryImages = [
  { id: 1, src: gallery1, alt: "Mặt tiền phòng khám" },
  { id: 2, src: gallery2, alt: "Khu vực chờ" },
  { id: 3, src: gallery3, alt: "Kho thuốc Đông y" },
  { id: 4, src: gallery4, alt: "Phòng điều trị" },
  { id: 5, src: gallery5, alt: "Bác sĩ khám bệnh" },
  { id: 6, src: gallery6, alt: "Đội ngũ y bác sĩ" },
];

export const aboutHistoryImage = intro1;

export const certificates = [
  { id: 1, src: intro2, alt: "Giấy phép hoạt động" },
  { id: 2, src: intro3, alt: "Chứng nhận chuyên môn 1" },
  { id: 3, src: intro4, alt: "Chứng nhận chuyên môn 2" },
];

export const facilityImages = [
  { id: 1, src: cs1, alt: "Cơ sở vật chất 1" },
  { id: 2, src: cs2, alt: "Cơ sở vật chất 2" },
  { id: 3, src: cs3, alt: "Cơ sở vật chất 3" },
];
