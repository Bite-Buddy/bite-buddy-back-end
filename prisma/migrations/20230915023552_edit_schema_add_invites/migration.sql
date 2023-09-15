-- CreateTable
CREATE TABLE "invite" (
    "id" SERIAL NOT NULL,
    "recipient_id" INTEGER NOT NULL,
    "kitchen_id" INTEGER NOT NULL,

    CONSTRAINT "invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_kitchen_id_fkey" FOREIGN KEY ("kitchen_id") REFERENCES "kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invite" ADD CONSTRAINT "invite_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
