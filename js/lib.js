//viết js
// Danh sách sản phẩm
const Products =
[
{
    id:"1",
    nameProduct: "GIỐNG CHÓ CUTE",
    price: "3.000.000/1 con",
    image: "../assets/images/chotrang.jpg",
    description: `Chó phốc sóc (hay chó Pomeranian) là một giống chó siêu dễ thương có nguồn gốc từ Đức.<br>
                  Pom đã là giống chó quý tộc ngay từ khi sơ khai, ngoan ngoãn, biết nghe lời và không quậy phá.`,
    detail: `
        Chó phốc sóc là giống chó cảnh nhỏ.<br>
        Chúng rất thông minh, dễ huấn luyện và sống tình cảm với chủ.<br>
        Thích hợp nuôi trong căn hộ hoặc nhà nhỏ.<br>
        Cần chải lông thường xuyên để giữ bộ lông đẹp.<br>
    `,
    link: "chitiet.html"
},
{
    id:"2",
    nameProduct: "GIỐNG MÈO QUÝ TỘC",
    price: "5.000.000/1 con",
    image: "../assets/images/cat.jpeg",
    description: `Mèo Ragdoll sở hữu đôi mắt xanh cuốn hút cùng bộ lông mền mịn như bông.<br>
                  Tính cách hiền lành, cục kỳ tình cảm, và khiến ai nhìn cũng muốn ôm ngay lần đầu.`,
    detail: `
        Mèo Ragdoll rất hiền và ít khi cào người.<br>
        Chúng thích được ôm và vuốt ve.<br>
        Rất phù hợp cho gia đình có trẻ nhỏ.<br>
    `,
    link: "chitiet.html"
},
{
    id:"3",
    nameProduct: "GẤU TRÚC Ú",
    price: "10.000.000/1 con",
    image: "../assets/images/truc1.webp",
    description: `Gấu trúc với bộ lông trắng đen, siêu đáng yêu khiến ai cũng mê,luôn nhanh nhẹn và có bụng bự.<br>
                  Tính cách hiền lành, visual điện ảnh,luôn là hình tượng yêu thích trong giới thú cưng.`,
    detail: `
        Gấu trúc chủ yếu ăn tre.<br>
        Rất hiền nhưng có thể khá mạnh nếu bị đe dọa.<br>
        Là loài động vật biểu tượng của Trung Quốc.<br>
    `,
    link: "chitiet.html"
},
{
    id:"4",
    nameProduct: "CÁ HEO",
    price: "21.000.000/1 con",
    image: "../assets/images/ca.jfif",
    description: `Cá heo là loài thông minh,thân thiện, nổi bật với những màn bơi lội đầy năng lượng,và đáng yêu.<br>
                Luôn mang tới cảm giác vui vẻ, tích cực, và tự do,khiến ai cũng cảm thấy thích thú.`,
    detail: `
        Cá heo cực kỳ thông minh, có thể giao tiếp bằng âm thanh.<br>
        Chúng sống theo bầy đàn và rất thân thiện với con người.<br>
    `,
    link: "chitiet.html"
},
{
    id:"5",
    nameProduct: "CHÓ ANGOLA THẢO",
    price: "8.000.000/1 con",
    image: "../assets/images/1.jpg",
    description: "Chó Alaska to khỏe, dễ thương và rất trung thành. Và rất mập tuy nó hơi xấu nhưng nó vẫn là một loài hcos trung thành",
    detail: `
        Chó Alaska (Alaskan Malamute) là giống chó kéo xe có nguồn gốc từ vùng lạnh giá Alaska.<br>
        Chúng sở hữu thân hình to lớn, cơ bắp khỏe mạnh và bộ lông dày giúp chịu được thời tiết khắc nghiệt.<br>
        Alaska rất trung thành, thông minh và thân thiện với con người.<br>
        Chúng cần không gian rộng để vận động và thích hợp với người có kinh nghiệm nuôi chó.<br>
        Tuổi thọ trung bình: 10 - 14 năm.
    `,
    link: "chitiet.html"
},
{
    id: "6",
    nameProduct: "RẮN TRÚC",
    price: "50.000/1 con",
    image: "../assets/images/2.jpg",
    description: "Rắn hổ mang Trúc loài rắn độc nguy hiểm, có khả năng bành cổ đặc trưng.",
    detail: `
        Rắn hổ mang Trúc là một cá thể thuộc họ rắn hổ mang, nổi bật với nọc độc mạnh và khả năng phòng vệ cao.<br>
        Khi bị đe dọa, chúng sẽ dựng phần cổ và bành mang ra để cảnh cáo đối thủ.<br>
        Cơ thể thon dài, di chuyển nhanh và rất nhạy cảm với môi trường xung quanh.<br>
        Loài rắn này thường sống ở khu vực rừng, bụi rậm hoặc nơi ẩm thấp.<br>
        Nọc độc có thể gây nguy hiểm cho hệ thần kinh nếu không được xử lý kịp thời.
    `,
    link: "chitiet.html"
},
{
    id: "7",
    nameProduct: "HEO LAN",
    price: "5.000/1 con",
    image: "../assets/images/4.jpg",
    description: "Heo Lan là một bé mập, ú và hơi chuppi. Heo Lan là một trong những giống heo phổ biến trong chăn nuôi công nghiệp hiện nay.",
    detail: `
        Heo Lan là một trong những giống heo phổ biến trong chăn nuôi công nghiệp hiện nay.<br>
        Đặc điểm nổi bật là thân hình dài, lưng thẳng, tai to rủ về phía trước.<br>
        Giống heo này có khả năng sinh sản tốt, số lượng con/lứa cao và chăm con khéo.<br>
        Thịt heo Landrace thường có tỷ lệ nạc cao, ít mỡ nên rất được ưa chuộng.<br>
        Chúng thích nghi tốt với môi trường nuôi chuồng trại và dễ chăm sóc.
    `,
    link: "chitiet.html"
},
{
     id: "8",
    nameProduct: "CHUỘT Ý",
    price: "700.000/1 con",
    image: "../assets/images/3.jpg",
    description: "Chuột là loài gặm nhấm nhỏ, nhanh nhẹn, sống linh hoạt trong nhiều môi trường.",
    detail: `
        Chuột là loài động vật thuộc bộ gặm nhấm, có kích thước nhỏ và khả năng thích nghi rất cao.<br>
        Chúng thường sinh sống ở nhiều môi trường khác nhau như đồng ruộng, nhà ở, kho bãi và tự nhiên.<br>
        Chuột có răng cửa phát triển liên tục, giúp chúng dễ dàng gặm nhấm thức ăn và vật cản.<br>
        Một số loài chuột có khả năng sinh sản rất nhanh, dẫn đến số lượng tăng mạnh trong thời gian ngắn.<br>
        Chuột vừa là loài có vai trò trong hệ sinh thái, vừa có thể gây hại trong nông nghiệp và đời sống nếu mất kiểm soát.
    `,
    link: "chitiet.html"
},
{
    id: "9",
    nameProduct: "BÒ VIỄN",
    price: "15.000.000/1 con",
    image: "../assets/images/bo.jpg",
    description: "Bò là loài gia súc lớn, hiền lành, được nuôi phổ biến để lấy thịt và sữa.",
    detail: `
        Bò là động vật thuộc họ Bovidae, được con người thuần hóa từ rất lâu đời.<br>
        Chúng có thân hình lớn, sức khỏe tốt và khả năng thích nghi cao với nhiều môi trường sống.<br>
        Bò được nuôi chủ yếu để lấy thịt, sữa và sức kéo trong nông nghiệp ở một số nơi.<br>
        Sữa bò là nguồn thực phẩm giàu dinh dưỡng, cung cấp nhiều protein và canxi cho con người.<br>
        Hiện nay, chăn nuôi bò đóng vai trò quan trọng trong ngành nông nghiệp và kinh tế.
    `,
    link: "chitiet.html"
},
{
    id: "10",
    nameProduct: "DÊ VI",
    price: "3.500.000/1 con",
    image: "../assets/images/de.jpg",
    description: "Dê là loài gia súc nhỏ, nhanh nhẹn, sống tốt ở vùng đồi núi và khô hạn.",
    detail: `
        Dê là động vật thuộc họ Bovidae, được nuôi phổ biến ở nhiều quốc gia trên thế giới.<br>
        Chúng có khả năng leo trèo tốt, thích nghi mạnh với môi trường đồi núi và khô hạn.<br>
        Dê được nuôi để lấy thịt, sữa và da, trong đó thịt dê là món ăn giàu dinh dưỡng.<br>
        Sữa dê dễ tiêu hóa, thường được dùng thay thế sữa bò trong một số trường hợp.<br>
        Nghề nuôi dê mang lại hiệu quả kinh tế cao ở các vùng nông thôn và miền núi.
    `,
    link: "chitiet.html"
},
{
    id: "11",
    nameProduct: "HƯƠU HẠP",
    price: "25.000.000/1 con",
    image: "../assets/images/huou.jpg",
    description: "Hươu là loài động vật hoang dã, hiền lành, có giá trị kinh tế cao nhờ nhung hươu.",
    detail: `
        Hươu là loài động vật thuộc họ hươu nai, thường sống trong rừng hoặc được nuôi bán hoang dã.<br>
        Chúng có thân hình thanh mảnh, chân dài và di chuyển rất nhanh nhẹn.<br>
        Đặc điểm nổi bật của hươu đực là nhung hươu, một dược liệu quý có giá trị kinh tế cao.<br>
        Hươu thường ăn cỏ, lá cây và các loại thực vật tự nhiên.<br>
        Hiện nay, nuôi hươu lấy nhung đang là mô hình kinh tế hiệu quả ở nhiều địa phương.
    `,
    link: "chitiet.html"
},
{
    id: "12",
    nameProduct: "VỊT QUYÊN",
    price: "120.000/1 con",
    image: "../assets/images/thú mỏ vịt.jpg",
    description: "Vịt là loài gia cầm sống cả trên cạn và dưới nước, nuôi phổ biến để lấy thịt và trứng.",
    detail: `
        Vịt là loài gia cầm thuộc họ vịt, có khả năng bơi lội rất tốt nhờ chân có màng.<br>
        Chúng thường sống ở ao, hồ, sông hoặc được nuôi trong các trang trại gia cầm.<br>
        Vịt được nuôi chủ yếu để lấy thịt và trứng, là nguồn thực phẩm phổ biến.<br>
        Một số giống vịt còn được nuôi để lấy lông hoặc phục vụ chăn nuôi công nghiệp.<br>
        Nghề nuôi vịt mang lại thu nhập ổn định cho nhiều hộ nông dân.
    `,
    link: "chitiet.html"
}
];

// Tạo 1 sản phẩm
function createItem(obj) {
    const listProducts = document.getElementById("product-list");

    const item = document.createElement("div");
    item.className = "col-md-3 mb-3 d-flex";

    const card = document.createElement("div");
    card.className = "card w-100";

    const img = document.createElement("img");
    img.src = obj.image;
    img.alt = obj.nameProduct;
    img.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const nameProduct = document.createElement("h5");
    nameProduct.className = "card-title";
    nameProduct.innerHTML = obj.nameProduct;

    const price = document.createElement("p");
    price.className = "card-text text-primary fw-bold";
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.className = "card-text";
    description.innerHTML = obj.description;

    const linkProduct = document.createElement("a");
    linkProduct.href = obj.link;
    linkProduct.className = "btn btn-primary";
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link+"?id="+obj.id);

    cardBody.appendChild(nameProduct);
    cardBody.appendChild(price);
    cardBody.appendChild(description);
    cardBody.appendChild(linkProduct);

    card.appendChild(img);
    card.appendChild(cardBody);

    item.appendChild(card);
    listProducts.appendChild(item);
}

// Hiển thị danh sách sản phẩm
function createItems(products) {
    for (let i = 0; i < products.length; i++) {
        createItem(products[i]);
    }
}