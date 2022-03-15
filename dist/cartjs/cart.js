let numberOFItems =0;


class UI{
    static toggleBtn(cart, cartBar){
        const cartBarItem = document.querySelector(cart);
        const cartBarBtn = document.querySelector(cartBar);

        cartBarBtn.addEventListener('click', () => {
            cartBarItem.classList.toggle('active')
        })
    };


    static addClass(menu, menuBar){
        const menuBarItem = document.querySelector(menu);
        const menuBarBtn = document.querySelector(menuBar);

        menuBarBtn.addEventListener('click', () =>{
            document.body.style.opacity = "0.8"

            menuBarItem.classList.add('active')
        })
    };

    static remveClass(menu, menuBar){
        const menuBarItem = document.querySelector(menu);
        const menuBarBtn = document.querySelector(menuBar);

        menuBarBtn.addEventListener('click', () =>{
            document.body.style.opacity = "1"

            menuBarItem.classList.remove('active')
        })
    };

    static viewImage(){
        const currentImage = document.querySelector('.current__image a img');
        const clickedImage = document.querySelectorAll('.thumb-nails .image img');

       clickedImage.forEach(image => image.addEventListener('click', (e) =>{
        currentImage.src = e.target.src
    }));

    };

    static nextImage(){
        const images = document.querySelectorAll('.current__image');
        const nextImage = document.querySelector('.nextbtn');

        nextImage.addEventListener('click', () =>{
            const activeImage = document.querySelector('.show');
            activeImage.classList.remove('show')
            if(activeImage.nextElementSibling){
            
                activeImage.nextElementSibling.classList.add('show')
            }
            else{
               images[0].classList.add('show')
            };
        })
    };

    static prevImage(){
        const images = document.querySelectorAll('.current__image');
        const prevImage = document.querySelector('.prevbtn');

        prevImage.addEventListener('click', () =>{
            const activeImage = document.querySelector('.show');

            activeImage.classList.remove('show')
            if(activeImage.previousElementSibling){
                activeImage.previousElementSibling.classList.add('show')
            }
            else{
                images[images.length -1].classList.add('show')
             }
        })
    };


    static addToCart(){
        const addItem = document.querySelector('.add');
        let counter = document.querySelector('.counter input');

        addItem.addEventListener('click', itemAdded);
        function itemAdded(e){
            numberOFItems++;
            counter.value = numberOFItems;
    
        }
    };

    static removeFromCart(){
        const addItem = document.querySelector('.remove');
        let counter = document.querySelector('.counter input');


        addItem.addEventListener('click', itemAdded);
        function itemAdded(e){
            if (numberOFItems === 0){
                numberOFItems = 0;
            }
            else{
                numberOFItems--;
                counter.value = numberOFItems
            }

           
        }
    };


    static cartItems(){
         let cartItemsList = document.querySelector('.cart__menu i a');
         const btn = document.querySelector('.btn-cart');

         
        // initialize the cart by putting it empty

        const checkOutList = document.querySelector('.cart__items');
        const checkOutPage = checkOutList.querySelector('.check__out__cart__page');
        const itemNumber = checkOutList.querySelector('small')

        checkOutPage.style.display = 'none'

        const text = document.createElement('p')
        text.innerHTML = 'Your cart is empty'
        text.style.fontSize = '20px'
        checkOutList.appendChild(text)

        btn.addEventListener('click', preViewItems)

         function preViewItems(){

            const addItem = document.querySelector('.add');
            let counter = document.querySelector('.counter input');
    
    
            function addedCartItems(e){
                numberOFItems++;
                counter.value = numberOFItems
            }
            cartItemsList.textContent = counter.value;
            checkOutPage.style.display = 'block'

            itemNumber.innerHTML = ` 125 x ${counter.value}: $${counter.value * 125}`

            localStorage.setItem("item", JSON.stringify(counter.value))

            const item = JSON.parse(localStorage.getItem("item"));
            cartItemsList.textContent = item;

        
            text.style.display = 'none'
         }
    }


    static preViewImages(){
        const currentImage = document.querySelector('.current__image');
        const preViewContainer = document.querySelector('.preview__container');
        currentImage.addEventListener('click', () =>{

            preViewContainer.classList.add('preview__container__show')
        })
    };

    static preViewClose(){
        const preViewClose = document.querySelector('.close__preview__image');
        const preViewContainer = document.querySelector('.preview__container');
        preViewClose.addEventListener('click', () =>{

            preViewContainer.classList.remove('preview__container__show')
            
        })
    };


    
    static preViewNextImage(){
        const images = document.querySelectorAll('.images__box');
        const nextImage = document.querySelector('.preview__container .nextbtn');
        nextImage.addEventListener('click', () =>{
            const activeImage = document.querySelector('.show__preview');
            activeImage.classList.remove('show__preview')
            if(activeImage.nextElementSibling){
            
                activeImage.nextElementSibling.classList.add('show__preview')
            }
            else{
               images[0].classList.add('show__preview')
            };
        })
    };

    static preViewPrevImage(){
        const images = document.querySelectorAll('.images__box');
        const nextImage = document.querySelector('.preview__container .prevbtn');
        nextImage.addEventListener('click', () =>{
            const activeImage = document.querySelector('.show__preview');
            activeImage.classList.remove('show__preview')
            if(activeImage.previousElementSibling){
            
                activeImage.previousElementSibling.classList.add('show__preview')
            }
            else{
               images[images.length -1].classList.add('show__preview')
            };
        })
    };


}

UI.toggleBtn('.cart__items', '.cart__menu');
UI.addClass('.nav__bar', '.nav__menu__open');
UI.remveClass('.nav__bar', '.nav__menu__close');
UI.viewImage()
UI.nextImage()
UI.prevImage()
UI.addToCart()
UI.removeFromCart()
UI.cartItems()
UI.preViewImages()
UI.preViewClose()
UI.preViewNextImage()
UI.preViewPrevImage()

