 const projects = [
      {
        "id": 1,
        "name": "Phoenix Medical Resort",
        "address": "смт. Східниця, Львівська область",
        "invest_start_from": "від $10 000",
        "capitalisation": "до +30% щороку",
        "start_date": "44.44.2025",
        "profit_percent": "до 15% річних USD",
        "advantages": "1. Власні заводи — нижча собівартість будівництва;\n2. Успішний кейс у Буковелі — $155 млн виплат інвесторам;\n3. Безпечна туристична локація — Східниця.",
        "management_company": "PHOENIX",
        "cost": "$2187/м2",
        "planning": "в наявності котеджі від 52м2 до 64м2",
        "cost_growth": "+25-30% на рік",
        "project_launch": "4-ий квартал 2027"
      },
      {
        "id": 2,
        "name": "Phoenix Medical Resort 2",
        "address": "смт. Східниця, Львівська область",
        "invest_start_from": "від $10 000",
        "capitalisation": "до +30% щороку",
        "start_date": "44.44.2025",
        "profit_percent": "до 15% річних USD",
        "advantages": "1. Власні заводи — нижча собівартість будівництва;\n2. Успішний кейс у Буковелі — $155 млн виплат інвесторам;\n3. Безпечна туристична локація — Східниця.",
        "management_company": "PHOENIX",
        "cost": "$2187/м2",
        "planning": "в наявності котеджі від 52м2 до 64м2",
        "cost_growth": "+25-30% на рік",
        "project_launch": "4-ий квартал 2027"
      },
       {
      "id": 2,
      "name": "Phoenix Medical Resort 2",
      "address": "смт. Східниця, Львівська область",
      "invest_start_from": "від $10 000",
      "capitalisation": "до +30% щороку",
      "start_date": "44.44.2025",
      "profit_percent": "до 15% річних USD",
      "advantages": "1. Власні заводи — нижча собівартість будівництва;\n2. Успішний кейс у Буковелі — $155 млн виплат інвесторам;\n3. Безпечна туристична локація — Східниця.",
      "management_company": "PHOENIX",
      "cost": "$2187/м2",
      "planning": "в наявності котеджі від 52м2 до 64м2",
      "cost_growth": "+25-30% на рік",
      "project_launch": "4-ий квартал 2027"
    }
    ];
    

    const container = document.getElementById("projects");

    projects.forEach(p => {
      const block = document.createElement("div");
      block.innerHTML = `
        <h2>${p.name}</h2>
        <p><strong>Адреса:</strong> ${p.address}</p>
        <p><strong>Інвестиції від:</strong> ${p.invest_start_from}</p>
        <p><strong>Прибуток:</strong> ${p.profit_percent}</p>
        <p><strong>Компанія:</strong> ${p.management_company}</p>
        <p><strong>Ціна:</strong> ${p.cost}</p>
        <p><strong>Планування:</strong> ${p.planning}</p>
        <p><strong>Переваги:</strong><br>${p.advantages.replace(/\n/g, "<br>")}</p>
        <hr>
      `;
      container.appendChild(block);
    });
    

    const table = document.getElementById("projectTable");

    for (const [key, value] of Object.entries(project)) {
      const row = document.createElement("tr");

      const cellKey = document.createElement("th");
      cellKey.textContent = key;
      row.appendChild(cellKey);

      const cellValue = document.createElement("td");
      cellValue.textContent = value;
      row.appendChild(cellValue);

      table.appendChild(row);
    }