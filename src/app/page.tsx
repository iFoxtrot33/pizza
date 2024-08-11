import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Завтраки"
                items={[
                  {
                    id: 1,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductGroupList
                title="Закуска"
                items={[
                  {
                    id: 1,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
