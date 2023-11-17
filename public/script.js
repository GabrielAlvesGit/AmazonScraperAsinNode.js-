//  click event "scrapeButton"
document.getElementById("scrapeButton").addEventListener("click", async () => {
    const keyword = document.getElementById("keyword").value;
    const asin = document.getElementById("asin").value;

    // Valid entrada
    if (!keyword || !asin) {
        alert("Please enter both a keyword and an ASIN");
        return;
    }

    try {
        // Adicionar indicador de carregamento
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";
        const loadingMessage = document.createElement("p");
        loadingMessage.textContent = "Loading...";
        resultsContainer.appendChild(loadingMessage);

        // Fazer chamada AJAX para o script de back-end até 5 páginas
        const maxPages = 5;
        const allData = [];

        for (let page = 1; page <= maxPages; page++) {
            // Atualizar texto do indicador de carregamento
            loadingMessage.textContent = `Loading page ${page} of ${maxPages}...`;

            const response = await fetch(
                `/api/scrape?keyword=${keyword}&asin=${asin}&page=${page}`
            );
            const data = await response.json();

            // Adicionar resultados à lista completa
            allData.push(...data);
        }

        // Limpar indicador de carregamento
        resultsContainer.innerHTML = "";

        if (Array.isArray(allData) && allData.length === 0) {
            resultsContainer.innerHTML = "<p>No products found.</p>";
        } else {
            const ul = document.createElement("ul");

            if (Array.isArray(allData)) {
                allData.forEach((product, index) => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <h2>${product.title}</h2>
                        <p>Rating: ${product.rating}</p>
                        <p>Reviews: ${product.reviews}</p>
                        <img src="${product.image}" alt="${product.title}">
                        <p>${
                            product.position !== undefined &&
                            product.position !== -1
                                ? `Position: ${product.position}`
                                : `Position: ${index + 1}`
                        }</p>
                        ${
                            product.position !== undefined &&
                            product.position !== -1
                                ? "<p>This is the specified product!</p>"
                                : ""
                        }
                    `;
                    ul.appendChild(li);
                });
            } else {
                console.error("Unexpected response format:", allData);
                alert("An unexpected error occurred while scraping Amazon");
            }

            resultsContainer.appendChild(ul);
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred while scraping Amazon");
    }
});
