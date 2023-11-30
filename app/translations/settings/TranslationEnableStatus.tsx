async function getStatus() {
  const res = await fetch(
    "https://gsp-backend-git-main-frankie-wongs-projects.vercel.app/api/status/",
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function TranslationEnableStatus() {
  const status = await getStatus();
  console.log("Translation enabled status: " + status);
  return status;
}
