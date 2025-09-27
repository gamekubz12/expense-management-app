/*
  Warnings:

  - You are about to alter the column `name` on the `Department` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `title` on the `ExpenseReport` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "public"."Department" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "public"."ExpenseReport" ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "submitted_at" DROP NOT NULL,
ALTER COLUMN "submitted_at" DROP DEFAULT,
ALTER COLUMN "reviewed_at" DROP NOT NULL,
ALTER COLUMN "reviewed_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "public"."Expense" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" VARCHAR(50) NOT NULL,
    "expense_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "receipt_url" TEXT,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Expense" ADD CONSTRAINT "Expense_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "public"."ExpenseReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
