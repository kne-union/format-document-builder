
# format-document-builder


### 描述

能以所见即所得的方式进行数据填写，并通过打印模板或者邮件模板生成一个可打印文件或邮件


### 安装

```shell
npm i --save @kne/format-document-builder
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _FormatDocumentBuilder(@kne/current-lib_format-document-builder),(@kne/current-lib_format-document-builder/dist/index.css),_paymentData(@mock/payment.json),_contactData(@mock/contact.json)

```jsx
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

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

