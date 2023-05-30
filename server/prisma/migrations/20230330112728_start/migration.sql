-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "discordName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_name_key" ON "admin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_discordName_key" ON "user"("discordName");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
