interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}

class Cart {
  // protected user: User;
  // private store: object;

  constructor(protected user: User, private store: object = {}) {
    // 속성 지정자와 함께 사용하면 아래 초기화 코드 필요없이 깔꼼하게 작성 가능
    // this.user = user;
    // this.store = {}
  }

  put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    // this.store
    this.user;
  }
}

const promoCart = new PromotionCart({ name: "julie" });
promoCart.put();
// instance - object
const cart1 = new Cart({ name: "john" });
cart1.put();
const cart2 = new Cart({ name: "jay" });
