document.getElementById('refreshButton').addEventListener('click', fetchChecklist);

async function fetchChecklist() {
     try {
          const response = await axios.get('/api/checklist');
          const data = response.data;
          const tableBody = document.querySelector('#checklist tbody');
          tableBody.innerHTML = '';

          data.forEach((rule) => {
               const row = document.createElement('tr');
               const ruleCell = document.createElement('td');
               const statusCell = document.createElement('td');

               ruleCell.textContent = rule.name;
               statusCell.textContent = rule.status;
               statusCell.className = rule.status === 'Passed' ? 'passed' : 'failed';

               row.appendChild(ruleCell);
               row.appendChild(statusCell);
               tableBody.appendChild(row);
          });
     } catch (error) {
          console.error('Error fetching checklist:', error);
     }
}

fetchChecklist();