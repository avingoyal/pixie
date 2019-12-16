import * as React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';

import {CodeEditor} from '../src/components/code-editor/code-editor';

class EditorWrapper extends React.Component<{ onSubmit?: () => void }, { code: string }> {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }

  render() {
    return (
      <CodeEditor
        code={this.state.code}
        onChange={(code) => { this.setState({ code }); }}
        onSubmit={this.props.onSubmit}
      />);
  }
}

storiesOf('CodeEditor', module)
  .add('Basic', () => (
    <CodeEditor
      code='print("Something that provides mirth or amusement")'
    />
  ), {
    info: { inline: true },
    notes: 'Code editor component. This component is a wrapper around react-codemirror2. The ' +
      'component is uncontrolled, meaning it does not manage state on it\'s own, subscribe to ' +
      'code changes using the onChange callback.',
  })
  .add('With Wrapper', () => <EditorWrapper />, {
    info: { inline: true },
    notes: 'Example with a wrapper component that binds the code changes to the state.',
  })
  .add('shortcut', () => <EditorWrapper
    onSubmit={action('code submitted')}
  />, {
    info: { inline: true },
    notes: 'Example with submit shortcut: cmd+enter or ctrl+enter.',
  });
