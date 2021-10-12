CREATE TABLE "ACCOUNT" (
    "id" INT   NOT NULL,
    "auth_provider" TEXT   NOT NULL,
    "email" TEXT   NOT NULL,
    "password" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "birthday" DATE   NOT NULL,
    "male" BOOLEAN   NOT NULL,
    "address" TEXT   NOT NULL,
    "balance" INT   NOT NULL,
    "cur_point" INT   NOT NULL,
    "total_point" INT   NOT NULL,
    "date_joined" TIMESTAMP   NOT NULL,
    "role" TEXT   NOT NULL,
    CONSTRAINT "pk_ACCOUNT" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "NEWS" (
    "id" INT   NOT NULL,
    "author" INT   NOT NULL,
    "title" TEXT   NOT NULL,
    "body" TEXT   NOT NULL,
    "time" TIMESTAMP   NOT NULL,
    CONSTRAINT "pk_NEWS" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "MENU" (
    "id" INT   NOT NULL,
    "image" TEXT   NOT NULL,
    "name" TEXT   NOT NULL,
    "description" TEXT   NOT NULL,
    "price" INT   NOT NULL,
    "rem_quantity" INT   NOT NULL,
    CONSTRAINT "pk_MENU" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "COUPON" (
    "code" TEXT   NOT NULL,
    "name" TEXT   NOT NULL,
    "percent_discount" INT   NOT NULL,
    "time_create" TIMESTAMP   NOT NULL,
    "time_expire" TIMESTAMP   NOT NULL,
    "used" BOOLEAN  NOT NULL,
    CONSTRAINT "pk_COUPON" PRIMARY KEY (
        "code"
     )
);

CREATE TABLE "ORDER" (
    "id" INT   NOT NULL,
    "account" INT   NOT NULL,
    "item" INT   NOT NULL,
    "coupon" TEXT   NOT NULL,
    "deliver" BOOLEAN  NOT NULL,
    "cost" INT   NOT NULL,
    "paid_at" TIMESTAMP   NOT NULL,
    CONSTRAINT "pk_ORDER" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "ORDER_ITEMS" (
    "order_id" INT   NOT NULL,
    "item_id" INT   NOT NULL,
    "quantity" INT   NOT NULL,
    "cost" INT   NOT NULL
);

CREATE TABLE "DELIVERY" (
    "id" INT   NOT NULL,
    "order" INT   NOT NULL,
    "address" TEXT   NOT NULL,
    "status" TEXT   NOT NULL,
    CONSTRAINT "pk_DELIVERY" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "NEWS" ADD CONSTRAINT "fk_NEWS_author" FOREIGN KEY("author")
REFERENCES "ACCOUNT" ("id");

ALTER TABLE "ORDER" ADD CONSTRAINT "fk_ORDER_account" FOREIGN KEY("account")
REFERENCES "ACCOUNT" ("id");

ALTER TABLE "ORDER" ADD CONSTRAINT "fk_ORDER_item" FOREIGN KEY("item")
REFERENCES "MENU" ("id");

ALTER TABLE "ORDER" ADD CONSTRAINT "fk_ORDER_coupon" FOREIGN KEY("coupon")
REFERENCES "COUPON" ("code");

ALTER TABLE "ORDER_ITEMS" ADD CONSTRAINT "fk_ORDER_ITEMS_order_id" FOREIGN KEY("order_id")
REFERENCES "ORDER" ("id");

ALTER TABLE "ORDER_ITEMS" ADD CONSTRAINT "fk_ORDER_ITEMS_item_id" FOREIGN KEY("item_id")
REFERENCES "MENU" ("id");

ALTER TABLE "DELIVERY" ADD CONSTRAINT "fk_DELIVERY_order" FOREIGN KEY("order")
REFERENCES "ORDER" ("id");
