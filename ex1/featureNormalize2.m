function [X_norm, mu, sigma] = featureNormalize(X)


mu=min(X);
sigma=max(X)-min(X);
X_norm=(X-mu)./sigma;

end;