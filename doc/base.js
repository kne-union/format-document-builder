const {default: FormatDocumentBuilder} = _FormatDocumentBuilder;
const {default: paymentData} = _paymentData;
const {default: contactData} = _contactData;

const BaseExample = () => {
    return <div>
        <FormatDocumentBuilder data={{
            name: {
                className: "selected-client-name",
                default: "请输入客户名称",
                type: "Input", canEdit: true, canDelete: true,
            }
        }} template={`
            <div>
            <%if(!options?.isDeletedField('name')){%>
              <p><span style='margin-left: 8px;color: #666666;display: inline-block;max-width: 50%;vertical-align: top;' class='selected-client-name'><%=data.name%></span></div></p>
            <%}%>
             <p>哈哈哈哈</p>
             </div>
        `}/>
    </div>;
};

render(<BaseExample/>);
