const {default: FormatDocumentBuilder} = _FormatDocumentBuilder;
const {default: paymentData} = _paymentData;
const {default: contactData} = _contactData;

console.log(paymentData, contactData);

const BaseExample = () => {
    return <div>
        <FormatDocumentBuilder data={{
            name: {
                className: "selected-client-name",
                default: "请输入客户名称",
                type: "Input", width: "300px", height: "32px", canEdit: true, canDelete: true,
            }
        }} template={`
            <div>
             <p><span style='margin-left: 8px;color: #666666;display: inline-block;max-width: 50%;vertical-align: top;' class='selected-client-name'><%=data.name%></span></div></p>
             <p>哈哈哈哈</p>
             </div>
        `}/>
    </div>;
};

render(<BaseExample/>);
