class Picture {  //class must be started from capital letter

    constructor(painting, picTitle, picAuthor, picPrice, isInStock) {
        this.paint = painting;
        this.title = picTitle;
        this.author = picAuthor;
        this.price = picPrice;
        this.inStock = isInStock;

    }
    getPaint() {
        const IMG_PATH = './pics/';
        return `${IMG_PATH}${this.paint}`;
    }
    getTitle() {
        return `${this.title}`;
    }

    getAuthor() {
        return `${this.author}`;
    }
    getPrice() {
        return `$${this.price}`;
    }

    getInStock() {
        const inStock = 'In Stock';
        const OutOfStock = 'Out Of Stock';
        return (this.inStock ? inStock : OutOfStock);
    }

}

const pictures = [
    new Picture(
        '0061665_-.jpeg',
        'sheep',
        'Menashe Kadishman',
        20000,
        false
    ),

    new Picture(
        'cd044b_21283c1ca0064e3996be3a88c0328fbf.webp',
        'Self portrait',
        'Veniamin Kletzel',
        15000,
        true
    ),

    new Picture(
        'Claude_Monet_-_Twilight_Venice-945x749.webp',
        'Twilight Venice',
        'Claude Monet',
        30000,
        true
    ),

    new Picture(
        'houses-of-parliament-london-sun-breaking-through.jpgHD_-945x839.webp',
        'Houses of Parliament London sun breaking through',
        'Claude Monet',
        35000,
        true
    ),

    new Picture(
        'Monet-Arrival-Of-A-Train-1877-e1638646790291.jpg',
        'Arrival Of a Train',
        'Claude Monet',
        35500,
        false
    ),

    new Picture(
        'Pierre-Auguste_Renoir_-_La_Seine_à_Chatou_1874.jpg',
        'La Seine à Chatou',
        'Pierre Auguste Renoir',
        35000,
        true
    ),

    new Picture(
        'White_Water_Lilies_by_Claude_Monet_1899_Pushkin_Museum-1024x989.webp',
        'White Water Lilies',
        'Claude Monet',
        30000,
        true
    ),

    new Picture(
        'hasidsWithA_fish.jpg',
        'Hasid jews with afish',
        'Veniamin Kletzel',
        15000,
        true
    )];

export { pictures };