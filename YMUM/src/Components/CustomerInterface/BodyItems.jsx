import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

function BodyItems() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; 

    useEffect(() => {
      scrollToTheMenu();
    }, [currentPage]);
    
    const scrollToTheMenu = () =>{
        document.getElementById('menuStart').scrollIntoView();
    }

        const foodItemsCards = [      
            {
                "item_image": '/ItemImages/vegSpringRoll.jpeg',
                "item_name": "Veg Spring Rolls",
                "description": "Enjoy the crunch and flavor of these crispy fried rolls stuffed with a medley of finely chopped vegetables and served with a sweet and sour dipping sauce",
                "price": 120
            },
            {
                "item_image": '/ItemImages/chickenLollipop.jpeg',
                "item_name": "Chicken Lollipop",
                "description": "Indulge in these spicy and succulent chicken wings marinated in a tangy sauce and deep-fried to perfection",
                "price": 150
            },
            {
                "item_image": '/ItemImages/cheesyGarlicBread.jpeg',
                "item_name": "Cheese Garlic Bread",
                "description": "Savor the aroma and taste of these toasted bread slices topped with melted cheese and garlic butter, sprinkled with oregano and parsley",
                "price": 100
            },
            {
                "item_image": '/ItemImages/potatoWedges.jpeg',
                "item_name": "Potato Wedges",
                "description": "Relish these deep-fried potato wedges seasoned with salt and pepper, accompanied by a creamy mayonnaise dip",
                "price": 80
            },
            {
                "item_image": '/ItemImages/vegBiryani.jpeg',
                "item_name": "Veg Biryani",
                "description": "Experience the aroma and flavor of this fragrant rice dish cooked with vegetables and spices, served with raita and pickle",
                "price": 200
            },
            {
                "item_image": '/ItemImages/chickenBiryani.jpeg',
                "item_name": "Chicken Biryani",
                "description": "Savor the taste of this flavorful rice dish cooked with chicken and spices, served with raita and pickle",
                "price": 250
            },
            {
                "item_image": '/ItemImages/paneerButterMasala.jpeg',
                "item_name": "Paneer Butter Masala",
                "description": "Relish this rich and creamy curry with cottage cheese and butter, simmered in a tomato-based gravy, served with naan or roti",
                "price": 220
            },
            {
                "item_image": '/ItemImages/butterChicken.jpeg',
                "item_name": "Butter Chicken",
                "description": "Indulge in this popular and creamy curry with chicken and butter, cooked in a tomato-based gravy, served with naan or roti",
                "price": 260
            },
            {
                "item_image": '/ItemImages/vegPizza.jpeg',
                "item_name": "Veg Pizza",
                "description": "Enjoy this thin crust pizza with cheese and vegetable toppings, baked in a wood-fired oven, served with ketchup and oregano",
                "price": 300
            },
            {
                "item_image": '/ItemImages/chickenPizza.jpeg',
                "item_name": "Chicken Pizza",
                "description": "Delight in this thin crust pizza with cheese and chicken toppings, baked in a wood-fired oven, served with ketchup and oregano",
                "price": 350
            },
            {
                "item_image": '/ItemImages/vegNoodles.jpeg',
                "item_name": "Veg Noodles",
                "description": "Have fun with this stir-fried noodle dish with vegetables and soy sauce, tossed with sesame seeds and spring onions",
                "price": 180
            },
            {
                "item_image": '/ItemImages/chickenNoodles.jpeg',
                "item_name": "Chicken Noodles",
                "description": "Love this stir-fried noodle dish with chicken and soy sauce, tossed with sesame seeds and spring onions",
                "price": 200
            },
            {
                "item_image": '/ItemImages/vegBurgers.jpeg',
                "item_name": "Veg Burger",
                "description": "Bite into this tasty burger with a vegetable patty, lettuce, tomato, and cheese, sandwiched between toasted buns, served with fries and coleslaw",
                "price": 150
            },
            {
                "item_image": '/ItemImages/chickenBurgers.jpeg',
                "item_name": "Chicken Burger",
                "description": "Enjoy this juicy burger with a chicken patty, lettuce, tomato, and cheese, sandwiched between toasted buns, served with fries and coleslaw",
                "price": 180
            }
        ];

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = foodItemsCards.slice(indexOfFirstItem, indexOfLastItem);
        const totalPagination = Math.ceil(foodItemsCards.length / itemsPerPage);
        console.log(totalPagination);

        const paginate = (pageNumber)=> {
            setCurrentPage(pageNumber);
        }


  return (
    <>
    <span id='menuStart' className='font-extrabold ml-10 text-2xl' style={{ fontFamily: 'Lato, sans-serif' }}>Order food right away</span>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-items-center mt-5'>
        {currentItems.map((item, index) => (
            <Card key={index} style={{ width: '22rem', border: 'none', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)'}}>
              <Card.Img variant="top" src={`${item.item_image}`} style={{height:'20em', borderRadius: '2rem', padding: '1rem', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>{item.item_name}</Card.Title>
                <Card.Text style={{height:"7rem"}}>
                    {item.description}
                </Card.Text>
                <div className='flex justify-between aling-bottom' >&#8377;{item.price}
                    <Button variant="primary" style={{backgroundColor:"#FC6A03", border: "none"}}>Add To Platter</Button>
                </div>
              </Card.Body>
            </Card>
        ))}
    </div>
    <div className='flex justify-center m-3'>
        <Pagination className='custom-pagination'>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</Pagination.Prev>
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(foodItemsCards.length / itemsPerPage)} >Next</Pagination.Next>
            <Pagination.Last onClick={() => paginate(Math.ceil(foodItemsCards.length / itemsPerPage))} />
        </Pagination>
    </div>
    </>
  )
}

export default BodyItems