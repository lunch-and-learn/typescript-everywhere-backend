-- CreateTable
CREATE TABLE "RefinementSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jiraRef" TEXT NOT NULL,
    "refinementSessionId" INTEGER NOT NULL,
    CONSTRAINT "Ticket_refinementSessionId_fkey" FOREIGN KEY ("refinementSessionId") REFERENCES "RefinementSession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
