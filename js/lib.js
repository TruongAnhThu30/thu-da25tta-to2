//viết js
// Danh sách sản phẩm
const Products = [
{
    id:"1",
    nameProduct: "GIỐNG CHÓ CUTE",
    price: "3.000.000/1 con",
    image: "../assets/images/chotrang.jpg",
    description: `Chó phốc sóc (hay chó Pomeranian) là một giống chó siêu dễ thương có nguồn gốc từ Đức.<br>
                  Pom đã là giống chó quý tộc ngay từ khi sơ khai, ngoan ngoãn, biết nghe lời và không quậy phá.`,
    link: "chitiet.html"
},
{
    id:"2",
    nameProduct: "GIỐNG MÈO QUÝ TỘC",
    price: "5.000.000/1 con",
    image: "../assets/images/cat.jpeg",
    description: `Mèo Ragdoll sở hữu đôi mắt xanh cuốn hút cùng bộ lông mền mịn như bông.<br>
                  Tính cách hiền lành, cục kỳ tình cảm, và khiến ai nhìn cũng muốn ôm ngay lần đầu.`,
    link: "chitiet.html"
},
{
    id:"3",
    nameProduct: "GẤU TRÚC Ú",
    price: "10.000.000/1 con",
    image: "../assets/images/truc1.webp",
    description: `Gấu trúc với bộ lông trắng đen, siêu đáng yêu khiến ai cũng mê,luôn nhanh nhẹn và có bụng bự.<br>
                  Tính cách hiền lành, visual điện ảnh,luôn là hình tượng yêu thích trong giới thú cưng.`,
    link: "chitiet.html"
},
{
    id:"4",
    nameProduct: "CÁ HEO",
    price: "21.000.000/1 con",
    image: "../assets/images/ca.jfif",
    description: `Cá heo là loài thông minh,thân thiện, nổi bật với những màn bơi lội đầy năng lượng,và đáng yêu.<br>
                Luôn mang tới cảm giác vui vẻ, tích cực, và tự do,khiến ai cũng cảm thấy thích thú.`,
    link: "chitiet.html"
},

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