import { IAwsCdkCodepipelineStackProps } from './stack-config-types';

const environmentConfig: IAwsCdkCodepipelineStackProps = {
  tags: {
    Developer: 'Faruk Ada',
    Application: 'AwsCdkCodepipeline',
  },
  role: {
    name: 'codepipeline-role',
    description: 'IAM role for Codepipeline',
    managedPolicy: 'AdministratorAccess',
  },
  keyDescription: 'KMS key used by Codepipeline',
  github: {
    tokenSecretName: 'demo-github-token',
    owner: 'CodingWithFaruci',
    repo: 'my-first-cdk',
    branch: 'codepipeline',
  },
  codebuild: {
    templateProject: 'BuildTemplate',
    lambdaProject: 'BuildLambda',
    targetStack: 'MyFirstCdkStack',
    targetLambda: 'index.js',
  },
  pipelineName: 'LambdaDeploymentPipeline',
  bucketName:'coding-with-faruci-codepipeline-bucket',
  topic: {
    name: 'codepipeline-topic',
    subEmails: [],
  },
};

export default environmentConfig;