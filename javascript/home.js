window.addEventListener('DOMContentLoaded', () => {
    createInnerHtml();
});


const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png">
            </td>
            <td>Taylor hill</td>
            <td>Female</td>
            <td>
                <div class="dept-label">Finance</div>
                <div class="dept-label">Engineer</div>
            </td>
            <td>4000000</td>
            <td>20 Jan 2023</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                            src="assets/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit"
                            src="assets/create-black-18dp.svg">           
            </td>
        </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
};