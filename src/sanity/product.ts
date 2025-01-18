export const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name:"description",
            type:"string",
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            title: "Product Image",
            options: {
                hotpot: true,
              },
        },
        {
            name: "price",
            type: "number",
            title: "Price",
        },
        {
            name: "color",
            type: "string",
            title: "Color",
           
        }
    ]
}