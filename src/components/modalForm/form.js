import React from 'react';
import { Button, Input, InputNumber, Select, DatePicker, Form, Radio, Switch } from 'antd';
import './index.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class ModForm extends React.PureComponent {
  handleSubmit = e => {
    const { form } = this.props;
    e && e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { onOk } = this.props;
        onOk && onOk(values);
        form.resetFields();
      }
    });
  }

  doCancel = () => {
    const { onCancel, form } = this.props;
    onCancel && onCancel();
    form.resetFields();
  }

  generateFormItem = ({formItemLayout, label, hasFeedBack, name, options, component }) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem { ...formItemLayout } key={name} label={label} hasFeedBack={hasFeedBack}>
        { getFieldDecorator(name, options)(component) }
      </FormItem>
    );
  }

  getTextField = field => (
    <span className="ant-form-text">{ field.options && field.options.initialValue }</span>
  )

  getInputField = field => <Input />

  getInputNumberField = field => (
    <InputNumber
      step={ field.options.step }
      formatter={ field.options.formatter }
      style={{ width: '100%' }}
    />
  )

  getTextAreaField = field => (
    <Input type="textarea" rows={ field.options.rows || 4 } disabled={ field.options.disabled } />
  )

  getSelectField = field => (
    <Select
      placeholder="请选择"
      style={{ width: '100%' }}
      disabled={field.disabled}
      multiple={field.multiple}
    >
      {field.items().map(({ key, value }) => (
        <Select.Option key={key.toString()} value={key.toString()}>
          {value}
        </Select.Option>
      ))}
    </Select>
  )

  getRadioGroupField = field => (
    <RadioGroup>
      {field.items().map(({ key, value }) => (
        <Radio key={key.toString()} value={key.toString()}>
          {value}
        </Radio>
      ))}
    </RadioGroup>
  )

  getDateField = field => <DatePicker showToday={false} placeholder="请选择日期" />

  getDateTimeField = field => (
    <DatePicker showTime format="YYYY-MM-DD" placeholder="请选择时间" showToday={false} />
  )

  getSwitchField = field => (
    <Switch
      checkedChildren="开"
      unCheckedChildren="关"
      disabled={field.options.disabled}
      defaultChecked={field.options.initialValue}
    />
  )

  getUploadField = field => (
    <input type="file" ref={field.options.ref} disabled={field.options.disabled} name="patchFile" />
  )

  generateFormFields(fields) {
    return (
      <div>TTT</div>
    );
  }

  render() {
    const { fields } = this.props;
    return (
      <div className="formWrapper">
        <Form onSubmit={this.handleSubmit}>{ this.generateFormFields(fields) }</Form>
      </div>
    );
  }
}

const ModalForm = Form.create()(ModForm);
export default ModalForm;
